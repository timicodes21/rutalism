import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/services/authService";
import { LoginTestIds } from "@/constants/testIds";
import { StorageKeys } from "@/constants/storeKeys";
import toast from "react-hot-toast";
import { ClientRoutes } from "@/constants/routes";
import LoginPage from "./LoginPage";

// Mock router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));

// Mock API
jest.mock("@/services/authService", () => ({
  loginApi: jest.fn()
}));

// Mock toast
jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
  error: jest.fn()
}));

describe("Login Page Tests", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  test("renders the form inputs and button", () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText<HTMLInputElement>("Password");
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByRole<HTMLButtonElement>("button", {
      name: /Sign In/i
    });
    expect(submitButton).toBeInTheDocument();
  });

  it("shows validation errors if fields are empty", async () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Please enter a valid email/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Please enter your password/i)
      ).toBeInTheDocument();
    });
  });

  test("submits form and calls loginApi", async () => {
    (loginApi as jest.Mock).mockResolvedValue({
      success: true,
      data: { token: "test-token" }
    });

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "user@example.com" }
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" }
    });

    fireEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    await waitFor(() => {
      expect(loginApi).toHaveBeenCalledWith({
        email: "user@example.com",
        password: "password123"
      });
      expect(localStorage.getItem(StorageKeys.RUTALISM_AUTH_TOKEN)).toBe(
        "test-token"
      );
      expect(toast.success).toHaveBeenCalledWith("Login Successful");
      expect(mockPush).toHaveBeenCalledWith(ClientRoutes.DASHBOARD);
    });
  });

  test("handles API error gracefully", async () => {
    (loginApi as jest.Mock).mockResolvedValue({
      success: false,
      message: "Invalid credentials"
    });

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "wrong@example.com" }
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "wrongpassword" }
    });

    fireEvent.click(screen.getByTestId(LoginTestIds.SignButton));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Invalid credentials");
      expect(mockPush).not.toHaveBeenCalled();
    });
  });

  test("disables button and shows spinner while loading", async () => {
    (loginApi as jest.Mock).mockImplementation(
      () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve({ success: true, data: { token: "123" } });
          }, 100);
        })
    );

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "user@example.com" }
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" }
    });

    fireEvent.click(screen.getByTestId(LoginTestIds.SignButton));

    // Wait for spinner to appear
    const spinner = await screen.findByTestId(LoginTestIds.Spinner);
    expect(spinner).toBeInTheDocument();

    // Optionally check button is disabled
    const submitButton = screen.getByTestId(LoginTestIds.SignButton);
    expect(submitButton).toBeDisabled();

    // Wait for API call to finish
    await waitFor(() => expect(loginApi).toHaveBeenCalled());
  });
});

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono as geistMonoFont } from "next/font/google";
import "./globals.css";
import React from "react";
import QueryProvider from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = geistMonoFont({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Rutalism",
  description: "Admin Dashboard"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          {children}
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                fontWeight: "bold",
                fontSize: 12
              },
              success: {
                style: {
                  color: "#BCEF86"
                }
              },
              error: {
                style: {
                  color: "#FF738C"
                }
              }
            }}
          />
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;

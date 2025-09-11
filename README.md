# 📬 Email Dashboard – Frontend Technical Assessment

A production-grade email dashboard built with **Next.js**, showcasing advanced
frontend engineering practices including server-side pagination, modular
architecture, global state management, and performance optimization. This
project demonstrates a deep understanding of scalable UI development, API
integration, and clean code principles.

---

## 🧰 Tech Stack Overview

| Technology          | Purpose                                                              |
| ------------------- | -------------------------------------------------------------------- |
| **Next.js**         | SSR, routing, performance optimizations, and developer experience    |
| **TypeScript**      | Type safety, better tooling, and maintainability                     |
| **React Query**     | API state management, caching, pagination, and background refetching |
| **Tailwind CSS**    | Utility-first styling for rapid UI development                       |
| **ShadCN UI**       | Accessible, themeable component library for consistent design        |
| **React Hook Form** | Form state management                                                |
| **Zod**             | Schema validation                                                    |
| **Context API**     | Lightweight global state management                                  |

---

## 🚀 Features

- 🔐 **Authentication**
  - Implemented real login flow using the email client api
  - Test credentials:
    ```
    Email: babalolaolumide@gmail.com
    Password: Olumide@1
    ```

- 📄 **Server-Side Pagination**
  - Implemented using `useInfiniteQuery` from React Query.
  - Ensures scalability and performance by fetching data in chunks from the
    server.

- 🔍 **Debounced Search & Filtering**
  - Search input is debounced to reduce unnecessary API calls.
  - Category-based filtering is integrated with query params for shareable URLs.

- ⚙️ **Global State Management with Context API**
  - Manages current page, search query, and filter category.
  - Chosen for its simplicity and lightweight footprint.
  - Avoids prop drilling and keeps components in sync.
  - For larger or more complex state, Redux Toolkit would be considered.

- 🎨 **Design System**
  - Built with **ShadCN UI** for accessible, customizable components.
  - Styled with **Tailwind CSS** for rapid, consistent, and responsive design.

- 📦 **API Management with React Query**
  - Handles caching, background refetching, and request deduplication.
  - Simplifies error/loading state management.
  - Enables infinite scrolling and pagination with minimal boilerplate.

---

## 📚 Architectural Decisions

### 🧱 Modular & Domain-Driven Architecture

- Codebase is organized by **feature domains** (e.g., auth, email, layout).
- Promotes scalability, testability, and separation of concerns.
- Strong adherence to **SOLID principles**:
  - **Single Responsibility**: Each module/component has a clear purpose.
  - **Open/Closed**: Easily extendable without modifying existing logic.
  - **Liskov Substitution**: Components are interchangeable via abstraction.
  - **Interface Segregation**: Hooks and services are lean and focused.
  - **Dependency Inversion**: Abstracted services decouple implementation from
    usage.

### 🌐 Why Next.js?

- **Server-Side Rendering (SSR)** improves performance and SEO.
- **File-based routing** simplifies navigation and structure.
- **API routes** allow backend logic without spinning up a separate server.
- **Built-in optimizations** like image handling and code splitting.

### 🔄 Why React Query?

- Eliminates manual state management for API calls.
- Automatically caches and refetches data.
- Handles pagination and infinite scrolling with `useInfiniteQuery`.
- Improves UX with built-in loading and error states.

### 🧠 Why Context API?

- Lightweight and ideal for managing small, centralized state.
- Avoids prop drilling and keeps components decoupled.
- Chosen over Redux for simplicity and performance.
- For larger state trees or complex interactions, Redux Toolkit would be
  preferred.

### 🎨 Why ShadCN UI + Tailwind CSS?

- **ShadCN UI** provides accessible, themeable components with minimal setup.
- **Tailwind CSS** enables rapid styling with utility classes.
- Together, they ensure a consistent, responsive, and maintainable design
  system.

---

## ⚙️ Performance Tradeoffs & Decisions

| Decision                      | Rationale                                                            |
| ----------------------------- | -------------------------------------------------------------------- |
| **Debounced Search**          | Reduces API load and improves responsiveness                         |
| **Server-side Pagination**    | Scales better with large datasets and reduces client memory usage    |
| **Context API over Redux**    | Lightweight and sufficient for current state needs                   |
| **React Query for API State** | Handles caching, background updates, and pagination elegantly        |
| **Modular Architecture**      | Improves maintainability and scalability                             |
| **ShadCN + Tailwind**         | Combines accessibility with rapid development and consistent styling |

---

## 🧠 Assumptions

- Email data structure is consistent and stable.
- API latency is low; fallback loading states are implemented.
- Authentication is mock-based and not security-critical.
- Dataset size is manageable for server-side pagination.
- No need for persistent user sessions or role-based access control.

---

## 📦 Installation

```bash
git clone https://github.com/your-username/email-dashboard.git
cd email-dashboard
npm install
npm run dev
```

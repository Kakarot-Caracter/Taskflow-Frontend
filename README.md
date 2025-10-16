# TaskFlow Frontend

TaskFlow is a modern and intuitive task management application designed to help you organize your work and boost your productivity. This is the frontend of the application, built with Next.js and other modern web technologies.

## Features

*   **User Authentication:** Secure user registration, login, and password reset functionality.
*   **Task Management:** Create, read, update, and delete tasks with ease.
*   **Task Filtering:** Filter tasks by status (e.g., "To Do", "In Progress", "Done") to stay organized.
*   **State Management:** Centralized state management with Zustand for a consistent and predictable application state.
*   **Data Fetching:** Efficient data fetching and caching with React Query.
*   **Responsive Design:** A responsive and mobile-friendly user interface built with Tailwind CSS.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
*   **Data Fetching:** [React Query](https://tanstack.com/query/v5)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/) and custom components.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later)
*   npm or yarn

### Installation

1.  Clone the repo
    ```sh
    git clone https://your-repo-url/taskflow-frontend.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a standard Next.js App Router structure:

```
/
├── app/                  # Main application code
│   ├── (auth)/           # Authentication-related pages
│   ├── (main)/           # Main application pages
│   ├── api/              # API routes
│   ├── components/       # Shared components
│   ├── lib/              # Library functions
│   ├── providers/        # React Context providers
│   └── styles/           # Global styles
├── public/               # Static assets
└── ...                   # Configuration files
```
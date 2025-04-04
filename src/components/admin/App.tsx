import { createBrowserRouter, RouterProvider } from "react-router";
import AdminDashboard from "./AdminDashboard";

const App = () => {
    const router = createBrowserRouter(
        [
            {
                path: "*",
                element: (
                    <AdminDashboard />
                ),
            },
        ],
        { basename: "/admin" },
    );
    return <RouterProvider router={router} />;
}

export default App



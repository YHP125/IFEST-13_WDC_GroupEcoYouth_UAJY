import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Import ProtectedRoutes
import ProtectedRoutes from "./ProtectedRoutes";
import App from "../App";
import { Sandbox } from "../pages/Sandbox";

// All Effect CSS

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found!</div>
    },
    {
        path: "/",
        element: <App />
    },
    {
        path: "/sandbox",
        element: <Sandbox />
    }
]);

const AppRouter = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error"
import "../index.css";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/error",
            element: <Error />
        },
    ]);

    return(
        <div className="font-netflix-sans">
            <RouterProvider router={appRouter} />
        </div>
    )
};

export default Body;
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeView from "../../pages/home/view/HomeView";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <HomeView />
            </Layout>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
])
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Login from './Menu screens/Login.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ErrorPage from "./error-page";
import GuildSelect from './Menu screens/GuildSelect.tsx';
import Register from "./Menu screens/Register.tsx";
import GuildCreate from "./Menu screens/GuildCreate.tsx";
import MainMenu from "./Menu screens/MainMenu.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/MainMenu",
                element: <MainMenu/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/Login",
                element: <Login />,
                errorElement: <ErrorPage />
            },
            {
                path: "/Signup",
                element: <Register />,
                errorElement: <ErrorPage />
            },
            {
                path: "/About",
                element: <Login />,
                errorElement: <ErrorPage />
            },
            {
                path: "/GuildSelect",
                element: <GuildSelect />,
                errorElement: <ErrorPage />
            },
            {
                path: "/Guild/Create",
                element: <GuildCreate />,
                errorElement: <ErrorPage />
            },]
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

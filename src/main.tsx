import {StrictMode, useState} from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter, Navigate,
    RouterProvider, useLocation,
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
import GameplayLayout from "./Workshop screens/GameplayLayout.tsx";
import Workshop from "./Workshop screens/Workshop.tsx";
import {GetCurrentUserInformationWithPromise, getCurrentUserToken} from "./services/auth.service.ts";
import {UserFullInformation} from "./Types/UserAuthentication.ts";

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
                path: "/Guild/Select",
                element: <GuildSelect />,
                errorElement: <ErrorPage />
            },
            {
                path: "/Guild/Create",
                element: <GuildCreate />,
                errorElement: <ErrorPage />
            }]
    },
            {
                path: "/Gameplay",
                element: <RequireAuth><GameplayLayout /></RequireAuth>,
                errorElement: <ErrorPage />,
                children:[
                    {
                        path: "/Gameplay/Workshop",
                        element: <Workshop />,
                        errorElement: <ErrorPage/>
                    }
                ]
            }
]);

function RequireAuth({ children }: { children: JSX.Element }) {
    let auth : string = getCurrentUserToken();
    let location = useLocation();

    if (auth == null || auth.length == 0) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

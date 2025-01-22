import {Outlet} from "react-router-dom";
import NavigationMenu from "./Components/NavigationMenu.tsx";
import TopBar from "./Components/TopBar.tsx";

function GameplayLayout() {
    return (<div className="w-screen h-screen flex flex-col">
                <TopBar/>
                <div className="flex flex-grow">
                    <NavigationMenu/>
                    <Outlet/>
                </div>
            </div>
            )
        }

export default GameplayLayout;
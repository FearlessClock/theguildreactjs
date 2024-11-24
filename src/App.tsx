import './App.css'
import Typography from "@mui/material/Typography";
import {Link, Outlet,} from "react-router-dom";
import Button from "@mui/material/Button";

function App() {

  return (
    <>
        <div className="flex flex-col">
            <Typography variant="h1" gutterBottom>The Guild online</Typography>
            <Outlet />
        </div>
        <div className="mt-20">
            <Button component={Link} to={"/MainMenu"}>Main menu</Button>
        </div>
    </>
  )
}

export default App

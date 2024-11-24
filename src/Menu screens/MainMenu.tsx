import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';

function MainMenu() {

    return (
        <>
            <Typography variant="h4" gutterBottom>Welcome</Typography>
            <div className="flex flex-col gap-4">
                <Button component={Link} variant="contained" size="large" to={`/Login`}>Log in</Button>
                <Button component={Link} variant="contained" size="medium" to={`/Signup`}>Sign up</Button>
                <Button component={Link} variant="contained" size="small" to={`/About`}>About</Button>
            </div>
        </>
    )
}

export default MainMenu;
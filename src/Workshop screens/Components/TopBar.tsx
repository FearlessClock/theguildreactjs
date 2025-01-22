import {AppBar, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import FaceIcon from '@mui/icons-material/Face';
import {useState} from "react";
import {GetCurrentUserInformationWithPromise} from "../../services/auth.service.ts";
import {UserFullInformation} from "../../Types/UserAuthentication.ts";

function TopBar() {
    const [username, setUsername] = useState<string>("Loading");

    GetCurrentUserInformationWithPromise().then((fullUserInformation : UserFullInformation) => {setUsername(fullUserInformation.username)});

    return (
        <AppBar className="flex flex-row max-h-20" position="static">
            <Toolbar disableGutters className={"flex-grow"}>
                <div className={"flex flex-row absolute right-10"}>
                    <div className="mr-6">
                        <Typography variant="button" component="div" sx={{margin: "auto"}}>
                            {username}
                        </Typography>
                    </div>
                    <FaceIcon/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;
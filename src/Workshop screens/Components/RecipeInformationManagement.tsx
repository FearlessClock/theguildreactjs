import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";

function TopBar() {
    return (
        <Paper className="flex w-50 flex-grow">
            <Typography>Recipe information</Typography>
        </Paper>
    )
}

export default TopBar;
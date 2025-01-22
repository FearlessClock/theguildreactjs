import {Box, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Cart} from "../../Types/Cart.ts";

function CartsInformation(props) {
    return (
        <Paper className="w-full min-h-32 flex flex-grow">
            <Typography variant="body2" color="textSecondary" align={"center"}>{props.cartInformation.name}</Typography>
        </Paper>
    )
}

export default CartsInformation;
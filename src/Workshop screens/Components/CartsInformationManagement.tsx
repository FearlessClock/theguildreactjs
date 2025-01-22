import {Box, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import CartsInformation from "./CartsInformation.tsx";
import {Cart} from "../../Types/Cart.ts";

function CartsInformationManagement() {
    var carts: Cart[] = [
        {id:1, name:"Cart 1", timeTillArrival:4, isMoving:false, maxCarryAmount:16, numberOfSpaces:3},
        {id:2, name:"Cart 2", timeTillArrival:4, isMoving:false, maxCarryAmount:16, numberOfSpaces:6},
        {id:3, name:"Cart 3", timeTillArrival:4, isMoving:false, maxCarryAmount:16, numberOfSpaces:4}]
    var cartObjects = carts.map((cart: Cart) => {
        return (<CartsInformation cartInformation={cart}/>)
    })

    return (
        <Box className="flex w-50 flex-col flex-grow">
            <Typography align={"center"} variant="h5">Carts</Typography>
            <Paper className="flex w-50 flex-grow">
                <Stack className="w-full">
                    {cartObjects}
                </Stack>
            </Paper>
        </Box>
    )
}

export default CartsInformationManagement;
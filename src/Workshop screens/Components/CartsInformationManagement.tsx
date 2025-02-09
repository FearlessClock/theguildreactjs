import {Box, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import CartsInformation from "./CartsInformation.tsx";
import {Cart} from "../../Types/Cart.ts";

function CartsInformationManagement() {
    var carts: Cart[] = [
        {id:1, name:"Cart 1", timeTillArrival:4, isMoving:true, maxCarryAmount:16, numberOfSpaces:3, carried_items:[{id:1, quantity:3, item_information:{id:1, name:"wood", current_price:54}}, {id:2, quantity:2, item_information:{id:2, name:"stone", current_price:15}}]},
        {id:2, name:"Cart 2", timeTillArrival:4, isMoving:false, maxCarryAmount:16, numberOfSpaces:6, carried_items:[]},
        {id:3, name:"Cart 3", timeTillArrival:4, isMoving:false, maxCarryAmount:16, numberOfSpaces:4, carried_items:[{id:3, quantity:4, item_information:{id:3, name:"Log", current_price:22}}]}]
    var cartObjects = carts.map((cart: Cart) => {
        return (<CartsInformation key={cart.id} cartInformation={cart}/>)
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
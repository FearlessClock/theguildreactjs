import {Box, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import ItemInformation from "./ItemInformation.tsx";
import {ItemInformationType} from "../../Types/ItemInformationType.ts";

function CartsInformation(props : any) {

    var items = props.cartInformation.carried_items.map((item: ItemInformationType) => {
        return (<ItemInformation key={item.id} storageType={item}/>)
    })

    return (
        <Paper elevation={8} className="min-h-32 flex flex-col flex-grow m-4 justify-top">
            <Typography variant="h6" color="textSecondary">{props.cartInformation.name}</Typography>
            <Stack direction="column" spacing={2}>
                <Box>
                    {items}
                </Box>
            </Stack>
        </Paper>
    )
}

export default CartsInformation;
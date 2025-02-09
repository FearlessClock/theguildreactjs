import Typography from "@mui/material/Typography";
import {Box, Stack} from "@mui/material";
import CartsInformationManagement from "./Components/CartsInformationManagement.tsx";
import StoredItemsManagement from "./Components/StoredItemsManagement.tsx";
import RecipeInformationManagement from "./Components/RecipeInformationManagement.tsx";
import EmployeeInformationManagement from "./Components/EmployeeInformationManagement.tsx";
import {getCurrentUserToken} from "../services/auth.service.ts"
import {getWorkshops, getCarts} from "../services/workshop.service.ts"
import {Workshop} from "../Types/Workshop.ts";

function Workshop(){

    const userId : number = getCurrentUserToken().id;

    const workshop : Workshop = getWorkshops(1); // TODO: Use an effect to load the workshop

    return (
        <Box className="flex flex-col flex-grow m-4">
            <Typography variant="h2" color="textPrimary" align={"left"} margin={2}>Workshop Name</Typography>
            <Stack direction="row" spacing={2} className="Flex flex-grow">
                <CartsInformationManagement Workshop={""}/>
                <StoredItemsManagement/>
                <RecipeInformationManagement/>
                <EmployeeInformationManagement/>
            </Stack>
        </Box>
    )
}

export default Workshop;
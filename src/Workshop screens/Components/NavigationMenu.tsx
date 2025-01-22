import CharacterInformationBox from "./CharacterInformationBox.tsx";
import {Box, Divider, Paper, Stack} from "@mui/material";
import Button from "@mui/material/Button";

function NavigationMenu() {
    return (
        <Paper elevation={5} className="flex flex-col flex-grow max-w-60">
            <Stack>
                <CharacterInformationBox/>
                <Divider flexItem />
                <Box className="m-6">
                    <Button>Workshops</Button>
                    <Button>Workshop name 1</Button>
                    <Button>Workshop name 2</Button>
                    <Button>Go to marketplace</Button>
                </Box>
            </Stack>
        </Paper>
    )
}

export default NavigationMenu;
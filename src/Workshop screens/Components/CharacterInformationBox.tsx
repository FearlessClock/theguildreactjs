import {Avatar, Box, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

function CharacterInformationBox() {
    return (<>
        <Paper className="m-4">
            <Stack direction="row">
                <Avatar variant="square" className="m-4">CI</Avatar>
                <Box className="flex flex-col ml-4 mt-2 mb-2">
                    <Typography fontSize={13} align={"left"}>Character name</Typography>
                    <Typography fontSize={13} align={"left"}>Age: 25</Typography>
                    <Typography fontSize={13} align={"left"}>Carpenter</Typography>
                </Box>
            </Stack>
        </Paper>
    </>)
}

export default CharacterInformationBox;
import {Box, Stack} from "@mui/material";
import {StorageType} from "../../Types/StorageType.ts";
import CloadinaryImage from "../../ExternalServices/CloadinaryImage.tsx";

interface ItemInformationProps {
    storageType: StorageType;
}

const ItemInformation: React.FC<ItemInformationProps> = ({storageType}) => {
    return (<Box>
        <Stack direction="row" spacing={2}>
            <CloadinaryImage url="Scroll"></CloadinaryImage>
            <p>{storageType.item_information.name}</p>
        </Stack>
    </Box>)
}

export default ItemInformation;
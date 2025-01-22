import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Skeleton
} from "@mui/material";
import Card from "@mui/material/Card";
import {useEffect, useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import {GetCharacters} from "../services/guild.service.ts";
import {Character} from "../Types/Character.ts";

function GuildSelect() {
    const [selectedGuild, setSelectedGuild] = useState<Character | undefined>(undefined)
    const [characters, setCharacters] = useState<Character[]>([]);

    const handleGuildSelect = (event: SelectChangeEvent) => {
        var char = characters.find(character => character.id === +event.target.value);

        setSelectedGuild(char);
        console.log(char);
    }

    useEffect(() => {
        GetCharacters().then((characters: Character[]) =>
        {
            setCharacters(characters);
            setSelectedGuild(characters[0]);
            console.log(characters);
        })
    }, [])

    const menuItems = []
    if(characters.length > 0){
        menuItems.push(...characters.map((char: Character) => {return (<MenuItem key={char.id} value={char.id}>The {char.familyName} family</MenuItem>)}) )
    }

    return (
        <>
            <Typography variant="h2" gutterBottom>Which guild will you play as?</Typography>
            <Card>
                <CardContent className="flex flex-col gap-6">
                    {
                        characters.length > 0 ? (
                            <FormControl>
                                <InputLabel>Guild</InputLabel>
                                <Select
                                    displayEmpty
                                    variant="filled"
                                    name="countryId"
                                    labelId="country-select-label"
                                    id="country-select"
                                    value={''+selectedGuild?.id}
                                    label="Country"
                                    onChange={handleGuildSelect}>
                                    {menuItems}
                                </Select>
                            </FormControl>) :
                            (<Skeleton variant="text"/>)
                    }

                    <div className="flex flex-row gap-6">
                        <Paper className="flex-grow">
                            <AccessTimeIcon className="m-2"/>
                            <div className="m-2">
                                <Typography>10</Typography>
                            </div>
                            <div className="m-2">
                                <Typography>Game time</Typography>
                            </div>
                        </Paper>
                        <Paper className="flex-grow">
                            <AttachMoneyIcon className="m-2"/>
                            <div className="m-2">
                                <Typography>{selectedGuild && selectedGuild.money}</Typography>
                            </div>
                            <div className="m-2">
                                <Typography>Money</Typography>
                            </div>
                        </Paper>
                        <Paper className="flex-grow">
                            <BarChartIcon className="m-2"/>
                            <div className="m-2">
                                <Typography>Baron</Typography>
                            </div>
                            <div className="m-2">
                                <Typography>Rank</Typography>
                            </div>
                        </Paper>
                    </div>
                    <Button component={Link} variant="contained" size="large" to={`/Gameplay/Workshop`} disabled={selectedGuild === "Noone"}>Load guild</Button>
                </CardContent>
            </Card>
            <div className="mt-6">
                <Button component={Link} variant="contained" size="large" to={`/Guild/Create`}>Start a new guild!</Button>
            </div>
        </>
    )
}

export default GuildSelect;
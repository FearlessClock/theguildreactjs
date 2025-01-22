import Typography from "@mui/material/Typography";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {ReactElement, useEffect, useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import Card from "@mui/material/Card";
import {
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {getCountries, getProfessions} from "../services/world.service.ts";
import {Country} from "../Types/Country.ts";
import {Profession} from "../Types/Profession.ts";
import {CreateCharacter} from "../services/guild.service.ts";
import {Character} from "../Types/Character.ts";

type AutocompleteOptions = {
    label: string;
    id: number;
}

function GuildCreate(){
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [countries, setCountries] = useState<Country[]>();
    const [professions, setProfessions] = useState<Profession[]>();

    useEffect(() => {
        getCountries().then(
            (foundCountries) => {
                var options: AutocompleteOptions[] = [];
                for (var foundCountry of foundCountries) {
                    options.push({label: foundCountry.name, id: foundCountry.id});
                }
                setCountries(foundCountries);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setMessage(_content);
            }
        );
        getProfessions().then(
            (foundProfessions) => {
                var options: AutocompleteOptions[] = [];
                for (var foundProfession of foundProfessions) {
                    options.push({label: foundProfession.name, id: foundProfession.id});
                }
                setProfessions(foundProfessions);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setMessage(_content);
            }
        );
    }, []);

    const handleSubmit = (formValue: { professionId: number; countryId: number; firstName: string; familyName: string; }) => {
        const { professionId, countryId, firstName, familyName } = formValue;

        setMessage("");
        setLoading(true);
        var characterInfo : Character = { familyName: familyName, firstName: firstName, country: countryId}
        CreateCharacter(characterInfo).then(
            () => {
                console.log("Created new character");
                setLoading(false);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    }

    const validationSchema = Yup.object().shape({
        familyName: Yup.string().required("This field is required!"),
        firstName: Yup.string().required("This field is required!"),
    });

    const formik = useFormik({
        initialValues: {
            professionId: 0,
            countryId: 0,
            familyName: '',
            firstName: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    var countrySelectElements: ReactElement[] = [(<MenuItem key={0} value={0}>Choose your country</MenuItem>)];
    if(countries != undefined){
        countrySelectElements.push(...countries.map((opt : Country) => {
            return (
                <MenuItem key={opt.id} value={opt.id}>{opt.name}</MenuItem>
            )
        }));
    }

    var professionSelectElements: ReactElement[] = [(<MenuItem key={0} value={0}>Choose your profession</MenuItem>)];
    if(professions != undefined){
        professionSelectElements.push(...professions.map((opt : Country) => {
            return (
                <MenuItem key={opt.id} value={opt.id}>{opt.name}</MenuItem>
            )
        }));
    }

    return (
        <>
            <Typography variant="h2" gutterBottom>Create your guild?</Typography>
            <form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardContent className="flex flex-col gap-6">
                        <FormControl>
                            <InputLabel id="country-select-label">Country</InputLabel>
                            <Select
                                variant="filled"
                                name="countryId"
                                labelId="country-select-label"
                                id="country-select"
                                value={formik.values.countryId}
                                label="Country"
                                onChange={formik.handleChange}
                            >
                                {countrySelectElements}
                            </Select>
                        </FormControl>
                        <TextField
                            name="familyName"
                            label="Family Name"
                            value={formik.values.familyName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.familyName && Boolean(formik.errors.familyName)}
                            helperText={formik.touched.familyName && formik.errors.familyName}
                        />
                        <TextField
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <FormControl>
                            <InputLabel id="profession-select-label">Profession</InputLabel>
                            <Select
                                variant="filled"
                                name="professionId"
                                labelId="profession-select-label"
                                id="profession-select"
                                value={formik.values.professionId}
                                label="Profession"
                                onChange={formik.handleChange}
                            >
                                {professionSelectElements}
                            </Select>
                        </FormControl>
                        <Button variant="contained" disabled={loading} type="submit">
                            {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                            <span>Start guild</span>
                        </Button>
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </form>
        </>
    )
}

export default GuildCreate;
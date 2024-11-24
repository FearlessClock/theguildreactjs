import Card from "@mui/material/Card";
import {CardContent, CardHeader} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useFormik} from "formik";
import * as Yup from "yup";
import {NavigateFunction, useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import {register} from "../services/auth.service.ts";

function Register() {
    let navigate: NavigateFunction = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("This field is required!"),
        username: Yup.string().required("This field is required!"),
        email: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
        confirm_password: Yup.string().required("This field is required!"),
    });

    const handleOnSubmit = (formValue: {name: string, username:string, email:string, password:string, confirm_password:string}) => {
        const { name, username, email, password, confirm_password } = formValue;

        setLoading(true);
        setMessage('');

        if(password !== confirm_password){
            setLoading(false);
            setMessage("Passwords don't match");
            return;
        }

        register(name, username, email, password).then(
            () => {
                navigate("/Guild/Create");
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

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleOnSubmit
        });

    return (
        <>
            <Typography variant="h4" gutterBottom>Sign up to start your guild</Typography>
            <div className="mt-20">
                <form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardHeader title="Register">
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <TextField
                            name="name"
                            label="Name"
                            autoComplete="current-name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            name="username"
                            label="Username"
                            autoComplete="current-username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField
                            name="email"
                            label="Email"
                            autoComplete="current-email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            autoComplete="current-password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            name="confirm_password"
                            label="Confirm password"
                            autoComplete="current-confirm_password"
                            type="password"
                            value={formik.values.confirm_password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                            helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                        />
                        <Button variant="contained" disabled={loading} type="submit">
                            {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                            <span>Create account</span>
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
            </div>
            <Button component={Link} size="small" variant="text" to="/Login">Already have an account?</Button>
        </>
    )
}

export default Register
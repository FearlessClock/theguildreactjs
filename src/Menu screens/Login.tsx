import { useState } from 'react'
import '../App.css'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {CardContent, CardHeader} from "@mui/material";

import { NavigateFunction, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useFormik} from "formik";
import * as Yup from "yup";

import {login} from "../services/auth.service.ts"

function Login() {
    let navigate: NavigateFunction = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
    });

    const handleLogin = (formValue: { username: string; password: string }) => {
        const { username, password } = formValue;

        setMessage("");
        setLoading(true);

        login(username, password).then(
            () => {
                navigate("/Guild/Select");
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
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleLogin,
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardHeader title="Log in">
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
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
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button variant="contained" disabled={loading} type="submit">
                            {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                            <span>Log in</span>
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
            <Button component={Link}  size="small" variant="text" to="/Signup">Don't have an account?</Button>
        </>
)
}

export default Login
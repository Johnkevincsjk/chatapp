import React from 'react'
import '../LoginComponent/Login.css'
import { TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='container Login_container'>
            <div className="Login_main bg-dark">
                <h3>Login to your account</h3>
                <form action="" className='login_form'>
                    <TextField
                        sx={{
                            width: "100%",
                            marginBottom: "25px",
                            "& .MuiInputBase-root": {
                                color: "white",

                            },

                        }} id="standard-basic" label="Mail Id" variant="outlined" />



                    <TextField
                        sx={{
                            width: "100%",
                            marginBottom: "25px",
                            "& .MuiInputBase-root": {
                                color: "white",

                            },
                        }}
                        id="standard-basic" type='password' label="Password" variant="outlined" />
                    <Button variant="outlined">Log in</Button>
                </form>
                <div className="login_footer p-2">
                    Don't have an account? <Link>Sign up</Link>
                </div>
            </div>
        </div>
    )
}

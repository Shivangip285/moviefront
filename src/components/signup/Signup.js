import React, {useState, useEffect} from "react";
import {Form, Formik} from "formik";
import {FormikTextField} from "../formik";
import {Button} from "@material-ui/core";
import styles from "./styles/signupstyles";
import PropTypes from "prop-types";
import useLogin from "./hooks/useSignup";
import {formSchema, initialValues} from "./services/signupFormService";




const Signup = ({location, history, isAuthenticated, onSignup}) => {
    const classes = styles();
    const {from} = location.state || {from: {pathname: "/login"}};
    const {errorMessage, handleSignup} = useLogin(onSignup);
    const [passwordShown, setPasswordShown] = useState(false);



    useEffect(() => {
        if (isAuthenticated) {
            history.replace(from);
            }

    });
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    return (
        <div className={classes.loginContainer}>
            <Formik initialValues={initialValues}
                    onSubmit={handleSignup}
                    validationSchema={formSchema}>
                {
                    (props) => {
                        const {
                            isValid,
                        } = props;
                        return (


                            <Form className={classes.loginForm} style={{width:"30%"}} >
                            <h1> Create Account </h1>
                                 <FormikTextField
                                     required
                                     margin="dense"
                                     name="name"
                                     label="Name"
                                 />
                                 <FormikTextField
                                     required
                                     margin="dense"
                                     name="username"
                                     label="Username"
                                 />
                                 <FormikTextField
                                     required
                                     margin="dense"
                                     name="email"
                                     label="Email"
                                     type="email"
                                 />
                                 <FormikTextField
                                     required
                                     margin="dense"
                                     type="tel"
                                     name="mobileNumber"
                                     label="Mobile number"
                                 />



                                <FormikTextField
                                   required

                                   type={passwordShown ? "text" : "password"}

                                    margin="dense"
                                    name="password"
                                    label="Password"
                                    />
                                    <div>

                                <input type="checkbox"
                                onClick={togglePassword}
                                value="show password"
                                name="show password"
                                  /> show password</div>



                                {
                                    errorMessage()
                                }

                                <FormikTextField
                                    required
                                    type="password"
                                    margin="dense"
                                    name="confirmPassword"
                                    label="Confirm Password"

                                />

                                {
                                    errorMessage()
                                }
                                <FormikTextField
                                    required

                                    margin="dense"
                                    name="city"
                                    label="city"
                                />
                                <FormikTextField
                                    required
                                    type="date"
                                    margin="dense"
                                    name="DOB"
                                    />

                                   <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!isValid}
                                    color="primary"
                                    className={classes.loginButton}
                                    >
                                    Signup
                                </Button><br/>
                                <span className={classes.signupPage}>
                                Already have an account? <a href="/login">signin</a>
                                                                </span>

                            </Form>
                        );
                    }
                }
            </Formik>
        </div>
    );
}

Signup.propTypes = {
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onSignup: PropTypes.func.isRequired
};

export default Signup;

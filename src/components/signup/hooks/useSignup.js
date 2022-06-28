import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/signupstyles";


export default (onSignup) => {
    const classes = styles();
    const [showError, setShowError] = useState(false);

    const errorMessage = () => {
        if (showError) {
            return (
                <Typography variant="body1" color="error" className={classes.loginErrorMessage}>
                    SignUp failed
                </Typography>
            )
        }
    };

    const handleSignup = async (values) => {
        values.preventDefault();
        const {name,username,mobileNumber,email,password,confirmPassword,city,DOB} = values;
        try {
            await onSignup(name,username,mobileNumber,email,password,confirmPassword,city,DOB);

            setShowError(false);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setShowError(true);
            } else {
                throw err;
            }
        }
    };

    return {
        errorMessage: errorMessage,
        handleSignup: handleSignup
    };
};

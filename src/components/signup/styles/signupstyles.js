import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        loginContainer: {
            display: "flex",
            justifyContent: "center",
            padding: "20px 40px"
        },
        loginForm: {
            display: "flex",
            flexDirection: "column"

        },
        loginButton: {
            marginTop: "15px"
        },
        loginErrorMessage: {
            marginTop: "8px"
        },
        hidespan:{
        padding: "20px 40px"
        }

    })
);

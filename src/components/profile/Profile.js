import React ,{useState,useEffect} from 'react';
import {Button,Typography ,Dialog, DialogContent} from "@material-ui/core";
import styles from "./styles/profileStyles";
import {Form, Formik} from "formik";
import FormikTextField from "../formik/FormikTextField";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useProfile from "./hooks/useProfile";
import ChangePasswordDialog from "./ChangePasswordDialog";
import {Redirect, Route} from "react-router-dom";

import Alert from "@material-ui/lab/Alert/Alert";

const Profile =({isAuthenticated}) =>{


       const classes = styles();
       const {profile,profileLoading}= useProfile();
       const [popUp, setPopup] = useState(false);


       const handlePopUpOpen = () =>{
         setPopup(true);
       }


        const handlePopUpClose = () =>{
                setPopup(false);
              }

//       useEffect(() => {
//               if (isAuthenticated) {
//
//               }
//           });

return(

     <div>
       <div className={classes.card}>
         <div className={classes.userContent}>
                         <Typography variant="h6" className={classes.userHeading}>
                               User Profile
                         </Typography>
                         <Typography variant="body1" >
                                 Name:{profile.name}
                          </Typography>
                          <Typography variant="body1" >
                                  UserName:{profile.username}
                          </Typography>
        </div>
         <Button onClick={handlePopUpOpen} variant="contained"  color="primary" className={classes.button}>Change Password</Button>
       </div>
       <ChangePasswordDialog open={popUp} onClose={handlePopUpClose} />


     </div>

 );


}

//Profile.propTypes = {
//    isAuthenticated: PropTypes.bool.isRequired,
//
//};

export default Profile;
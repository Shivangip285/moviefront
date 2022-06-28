import React, {useState} from "react";
import {Button,Typography ,Dialog, DialogContent} from "@material-ui/core";
import styles from "./styles/profileStyles";
import {Form, Formik} from "formik";
import FormikTextField from "../formik/FormikTextField";
import changePasswordService from "./services/changePasswordService";
import {object, string,ref} from "yup";
import handleLogout from "../layout/hooks/useAuth";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Alert from "@material-ui/lab/Alert/Alert";

const ChangePasswordDialog =({open, onClose,onLogout}) =>{
  const [success, setSuccess] = useState(null);
  const [passwordShown, setPasswordShown] = useState("password");
   const [oldPasswordShown, setOldPasswordShown] = useState("password");
   const [newPasswordShown, setNewPasswordShown] = useState("password");

   const classes = styles();

     const togglePassword =()=>{
          if(passwordShown==="password")
          {
           setPasswordShown("text")
          return;
          }
          setPasswordShown("password")
        }

        const toggleOldPassword =() =>{
         if(oldPasswordShown === "password")
         {
         setOldPasswordShown("text")
         return;
         }
         setOldPasswordShown("password")
        }

       const toggleNewPassword =() =>{
       if(newPasswordShown === "password")
       {
       setNewPasswordShown("text")
       return;
       }
       setNewPasswordShown("password")
       }

   const initialValues = {
         oldPassword: "",
         newPassword: "",
         confirmNewPassword:""
     };

     const formSchema = object({
         oldPassword: string("Enter current password")
             .required("Current password is required"),
         newPassword: string("Enter new password")
             .required("New password is required")
             .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
         confirmNewPassword: string("Enter again new password")
                      .required("New password is required")
                      .oneOf([ref('newPassword')], 'Passwords must match')

     });

     const changePassword = async (values) => {

         try {
            const response = await changePasswordService.change(values.oldPassword,values.newPassword);
            setSuccess(true);
         } catch {
             setSuccess(false);

         } finally {
             onClose();
         }
     };


return (

<>
      <Dialog open={open} onClose={onClose} maxWidth={false}  className ={classes.dialogContainer} >


        <Typography variant="h5" classes={classes.dialogHeader}>
              Change Password
        </Typography>
       <Formik validationSchema={formSchema} initialValues={initialValues} onSubmit={changePassword} className={classes.dialogContent} >
                           {
                               ({isValid}) => {
                                   return (
                                       <Form >
                                           <DialogContent>
                                            <div className={classes.formText} >
                                               <FormikTextField
                                                   required
                                                   margin="dense"
                                                   inputProps={{"data-testid": "old Password"}}
                                                   name="oldPassword"
                                                   label="Old password"
                                                   fullWidth
                                                   autoComplete='off'
                                                   autoFocus
                                                   type={oldPasswordShown}

                                               />
                                               <button  onClick={toggleOldPassword} className={classes.formButton}>
                                               {oldPasswordShown==="password"? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                                </button>

                                            </div>
                                            <div>
                                               <FormikTextField
                                                   required
                                                   margin="dense"
                                                   inputProps={{"data-testid": "password"}}
                                                   name="newPassword"
                                                   label="New Password"
                                                   fullWidth
                                                   autoComplete='off'
                                                   type={passwordShown}
                                               />
                                                <button  onClick={togglePassword} className={classes.formButton}>
                                                {passwordShown==="password"? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                                </button>
                                               </div>

                                            <div>
                                             <div className={classes.formText}>

                                               <FormikTextField
                                                       required
                                                       margin="dense"
                                                       inputProps={{"data-testid": "Confirm New Password"}}
                                                       name="confirmNewPassword"
                                                       label="Confirm new password"
                                                       fullWidth
                                                       autoComplete='off'
                                                       type={newPasswordShown}
                                               />

                                               <button  onClick={toggleNewPassword} className={classes.formButton}>
                                               {newPasswordShown==="password"?  <VisibilityOffIcon/> : <VisibilityIcon/>}
                                                 </button>
                                             </div>
                                            </div>

                                               <Button type="submit" disabled={!isValid} color="primary" variant="contained"
                                                   data-testid="ChangeButton"
                                                     >
                                                  CHANGE PASSWORD
                                               </Button>


                                           </DialogContent>
                                       </Form>
                                   );
                               }
                           }
                       </Formik>
                   </Dialog>

          </>
)}

export default ChangePasswordDialog;


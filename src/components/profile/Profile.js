import React from 'react';
import {Button} from "@material-ui/core";
import {Typography} from "@material-ui/core";



const Profile =() =>{ return(
<div style={{display: "flex",justifyContent: "flex-start",padding: "20px 40px"}}>
      <Typography variant="body1">
      <h2>User Profile</h2>

      <div>
        <h5>Name:Steve Jobs </h5>
        <h5>UserName:user</h5>
        </div>
        <Button variant="contained" style={{backgroundColor: "darkblue",color:"white",padding:"5px 35px"}}>Change Password</Button>
        </Typography>
     </div>

 );
};

export default Profile;
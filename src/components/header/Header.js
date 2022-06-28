import React,{useState} from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import MovieIcon from '@material-ui/icons/Movie';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from "./styles/headerStyles";
import PropTypes from "prop-types";


const Header = ({onLogout, isAuthenticated}) => {
    const classes = styles();
    const [profileIcon,setProfileIcon] = useState(false);


    const ProfileIcon =() =>{
       if (isAuthenticated) {
                  return (
                  <a href="/profile" >
                  <PersonIcon  className= {classes.PersonIcon} /></a>
                  );}
    }



    const logoutSection = () => {
        if (isAuthenticated) {
            return (

                <div onClick={onLogout} className={classes.logoutLink}>
                    <ExitToAppIcon/>

                    <Typography className={classes.headerLogo} variant="body1">
                        Logout
                    </Typography>


                    <h3 className={classes.welcomeDisplay}> Welcome,User!</h3>

                </div>

            );
        }

    };


    return (
        <AppBar position={"sticky"}>
            <Toolbar className={classes.toolbar}>
                <a href="/" className={classes.headerLink}>
                    <MovieIcon className={classes.cinemaLogoIcon}/>
                    <Typography className={classes.headerLogo} variant="h5">
                        SkyFox Cinema
                    </Typography>
                    </a>


                    {ProfileIcon()}


                {logoutSection()}
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    onLogout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default Header;

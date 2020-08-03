import React from 'react';
import {Box,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import Typed from "react-typed"
import TextField from "./TextField"
import {backgroundImage} from "../assets"


const useStyles = makeStyles(theme => ({
    root:{
        width:"100%",
        height:"70vh",
        position:"relative",
        display:"flex",
        backgroundImage:`url(${backgroundImage})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundAttachment:"fixed"
    },
    overlay:{
        position:"absolute",
        height:"100%",
        width:"100%",
        top:"0",
        backgroundColor:"rgba(0,0,0,.5)",
    },
    Body:{
        zIndex:3,
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    bodyContainer:{
        "& span":{
            fontSize:"1.8em",
            textAlign:"center",
            marginBottom:"2.5em",
            color:"white",
            [theme.breakpoints.down("sm")]:{
                fontSize:"1.5em"
            }
    }
}
}))

const MainView = function(props){
    const classes = useStyles()
    return(
        <Box className={classes.root}>
            <Box className={classes.overlay} />
            <Box className={classes.Body}>
             <Box className={classes.bodyContainer}>
                 <Typed
                 strings={[
                     'What would you love to learn?',
                     'What would you love to Know?',
                     'What do you Aspire to become?',
                     'All begins with Knowledge',
                     ]}
                     typeSpeed={40}
                     backSpeed={20}
                     loop />
                     <TextField/>
             </Box>
            </Box>
        </Box>
    )
}

export default MainView
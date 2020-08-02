import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {green} from "@material-ui/core/colors"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      transition:"all .8s linear",
      backgroundColor:"transparent",
      color:green["A700"],
      zIndex:5
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    changeBg:{
      backgroundColor:"rgba(0,0,0,.7)",
      color:"white"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      // display:"inline",
      [theme.breakpoints.up("md")]:{
        display:"none"
      }
    },
    hide: {
      display: 'none',
    },
    titleContainer:{
      display:"flex",
      flexDirection:"column",
      alignItems:"start",
      justifyContent:"start",
      "& h6":{
        letterSpacing:".1em",
        fontSize:"2.3em",
        margin:"0",
        "& > span":{
          fontWeight:"600"
        },
      },
      "& > span":{
        fontSize:".7em",
        textAlign:"right",
        // display:"none",
        letterSpacing:".01em"
      }
    },
    linkContainer:{
      marginLeft:"auto",
      width:"60%",
      display:"flex",
      justifyContent:"space-around",
      "& > a":{
        fontSize:"1.2em",
        fontWeight:"700",
        textDecoration:"none",
        color:green["A400"],
        letterSpacing:".17em",
        transition:"color .3s linear",
      "&::after":{
        content:"' '",
        display:"block",
        height:"2.5px !important",
        width:"0%",
        backgroundImage:`linear-gradient(to
           right,${green[500]},${green[700]})`,
        transition:"0.35s ease-out all",
      },
      "&:hover":{
        color:"white",
        "&::after":{
          height:"2.5px !important",
          width: "100%",
        },
      }
      },
      [theme.breakpoints.down("sm")]:{
        display:"none"
      }
    }
  }));
  

const Menu = ({open,handleToggle}) => {
    const classes = useStyles()
    const [scroll,setScroll] = React.useState({
      scrolling:false,
      scrollTop:0
    })
    const onScroll = (e) => {
      setScroll(
        {scrollTop:e.target.documentElement.scrollTop,
          scrolling:e.target.documentElement.scrollTop > scroll.scrollTop
        })
    }
    
    React.useEffect(() => {
      window.addEventListener('scroll',onScroll)
      return function (){
        window.removeEventListener('scroll',onScroll)
      }
    },[])
    

    return(
      // <Fade in={!scroll.scrolling}>
        <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, scroll.scrollTop && classes.changeBg , {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggle}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.titleContainer}>
          <Typography variant="h6" noWrap>
              Afri<span>learn</span>
          </Typography>
          <Typography variant="span" noWrap>
              For here, For Africa,For progress
          </Typography>
          </Box>
          <Box className={classes.linkContainer}>
            <a href="/">ABOUT</a>
            <a href="/">FAQ</a>
            <a href="/">FORUM</a>
            <a href="/">CONTACT</a>
            <a href="/">LOGIN</a>
            <a href="/">REGISTER</a>
          </Box>
        </Toolbar>
      </AppBar>
      // </Fade>
    )
}


export default Menu
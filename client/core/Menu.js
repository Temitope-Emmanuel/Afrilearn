import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor:"transparent",
      color:"green",
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
    menuButton: {
      marginRight: theme.spacing(2),
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
    }
  }));
  

const Menu = ({open,handleToggle}) => {
    const classes = useStyles()
    

    return(
        <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
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
        </Toolbar>
      </AppBar>
      
    )
}


export default Menu
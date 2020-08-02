import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from "./Drawer"
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Menu from "./Menu"
import backgroundImage from  "../assets/images/backgroundImg.jpg"
import Typed from "react-typed"
import TextField from "./TextField"
import Details from "./details"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    position:"relative",
    padding: theme.spacing(1,0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  overlayContainer:{
      position:"absolute",
      backgroundImage:`url(${backgroundImage})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      // backgroundAttachment:'fixed',
      backgroundSize:"cover",
      width:"100%",
      height:"60vh",
      top:"0",
      left:"0",
      marginBottom:"15em"
  },
  overlay:{
      height:"100%",
      width:"100%",
      backgroundColor:'rgba(0,0,0,.3)',
      zIndex:-1
  },
  bodyContainer:{
    position:"absolute",
    height:"100%",
    width:"100%",
    color:"black",
    top:0,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    "& span":{
    fontSize:"3.5ch",
    wrap:"noWrap",
    }
  },
  detailContainer:{
  }
}));

export default function PersistentDrawerLeft() {
 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Menu open={open} handleToggle={handleToggle} />
      <Drawer open={open} handleToggle={handleToggle} />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Box className={classes.overlayContainer}>
            <Box className={classes.overlay} />
            <Box className={classes.bodyContainer}>
                <Typed
                strings={[
                    'What would you love to learn?',
                    'What would you love to Know?',
                    'What do you Aspire to become?',
                    'All begins with Knowledge',
                    ]}
                    typeSpeed={0}
                    backSpeed={10}
                    loop />
                    <TextField/>
            </Box>        
        </Box>
        <Box className={classes.detailContainer}>
          <Details/>
        </Box>
      </div>
    </div>
  );
}

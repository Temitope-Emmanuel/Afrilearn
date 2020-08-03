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
import Questions from "./Questions"
import {ExamImage1,ExamImage2,ExamImage3,ExamImage4,Avatar,IcanImage,UImage} from "../assets"
import MainView from "./mainView"
import Footer from "./footer"


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
    // overflowY:"scroll"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   // padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-end',
  // },
  content: {
    flexGrow: 1,
    height:"100%",
    width:"100%",
    // padding: theme.spacing(1,0),
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
  bodyContainer:{
    // position:"absolute",
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
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    "& > h4":{
      margin:"1em",
      fontWeight:"600"
    }
  }
}));

const Home = (props) =>  {
 

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
        <MainView/> 
      <Box className={classes.detailContainer}>
          <Questions questions={props.questionDetails} exams={props.examDetails}   />
        </Box>
        <Footer/>
      </div>
    </div>
  );
}
Home.defaultProps = {
  questionDetails:[
    {image:ExamImage4,name:"WASSCE"},
    {image:ExamImage2,name:"JAMB/UTME"},
    {image:ExamImage3,name:"NECO"},
    {image:ExamImage1,name:'GCE'}
  ],
  examDetails:[
    {image:IcanImage,name:'ICAN'},
    {image:UImage,name:"UI"},
    {image:Avatar,name:"OBAFEMI AWOLOWO UNIVERSITY"}
  ]

}

export default Home
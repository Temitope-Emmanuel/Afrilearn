import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ForumIcon from '@material-ui/icons/Forum';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {green} from "@material-ui/core/colors"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage:`linear-gradient(${green["A400"]} 0%, #000 80%)`,
    color:"whitesmoke"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const DrawerComponent = ({open,handleToggle,defaultIcons}) =>  {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleToggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
        {defaultIcons.map(({name,icon},idx) => (
            <ListItem button key={idx}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
        </List>
      </Drawer>
  );
}

DrawerComponent.defaultProps = {
  defaultIcons:[
  {name:'ABOUT',icon:<InfoIcon/>},
  {name:'FAQ',icon:<LiveHelpIcon/>},
  {name:"BLOG",icon:<ForumIcon/>},
  {name:"FORUM",icon:<ContactSupportIcon/>},
  {name:"CONTACT",icon:<VpnKeyIcon/>},
  {name:"LOGIN",icon:<LockOpenIcon/>},
  {name:"REGISTER",icon:<VpnKeyIcon/>}
  ]
}


export default DrawerComponent
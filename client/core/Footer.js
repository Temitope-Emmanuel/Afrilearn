import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from "@material-ui/core/Box"
import Tooltip from '@material-ui/core/Tooltip'
import Typography from "@material-ui/core/Typography"
import Zoom from "@material-ui/core/Zoom"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"

const useStyles = makeStyles(theme =>({
  root:{
    backgroundColor:"whitesmoke",
    minHeight:"10vh",
    width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    "&  > p":{
      fontSize:"1.5em"
    },
    "& > div":{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      width:"100%",
      "& > div":{
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        alignItems:"center",
        width:"100%",
        margin:"0  1em",
        "& svg":{
          fontSize:"4em",
          cursor:"pointer",
        },
        "& span":{
          fontSize:"1.1em"
        }
      }
    }
  }
}))


const Footer = (props) => {
    const classes = useStyles()
    return(
      <Box className={classes.root}>
        <Box className={classes.socialContainer} >
          <ToolTip  TransitionComponent={Zoom} placement="top" arrow
          title={
            <Box style={{boxShadow:" 0px 0px 9px 15px rgba(255,255,255,.9)"}}>
              <Typography style={{
                backgroundColor:"rgba(255,255,255,.9)",
                color:"black",padding:".5em 0"}}>
                Follow us on Facebook
              </Typography>
            </Box>
          } >
          <Box className={classes.container}>
            <FacebookIcon/>
            <span>Facebook</span>
          </Box>
          </ToolTip>
          <ToolTip  TransitionComponent={Zoom} placement="top" arrow
          title={
            <Box style={{boxShadow:" 0px 0px 9px 15px rgba(255,255,255,.9)"}}>
              <Typography style={{
                backgroundColor:"rgba(255,255,255,.9)",
                color:"black",padding:".5em 0"}}>
                Like us on Facebook
              </Typography>
            </Box>
          } >
          <Box>
            <TwitterIcon/>
            <span>Twitter</span>
          </Box>
          </ToolTip>
          <ToolTip  TransitionComponent={Zoom} placement="top" arrow
          title={
            <Box style={{boxShadow:" 0px 0px 9px 15px rgba(255,255,255,.9)"}}>
              <Typography style={{
                backgroundColor:"rgba(255,255,255,.9)",
                color:"black",padding:".5em 0"}}>
                Follow us on Instagram
              </Typography>
            </Box>
          } >
          <Box>
            <InstagramIcon/>
            <span>Instagram</span>
          </Box>
          </ToolTip>
        </Box>
        <p>© Afrilearn. All Rights Reserved.</p>
        </Box>
    )
}

export default Footer
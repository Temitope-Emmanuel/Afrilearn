import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  gridList: {
    width: '90%',
    minHeight: 200,
    borderRadius:"2.5em",
    border: '1px solid #cecece',
    overflow:"hidden",
    [theme.breakpoints.down("sm")]:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor:"purple",
      border:"none"
    }
  },
  tile: {
    textAlign: 'center',
    borderRight: '1px solid #cecece',
    borderBottom: '1px solid #cecece',
    backgroundColor:'white',
    "& a":{
      textDecoration:"none"
    },
    [theme.breakpoints.down("sm")]:{
      border: '1px solid #cecece',
      borderRadius:".5em",
      margin:theme.spacing(),
      padding:"3em",
      "& a":{
        fontSize:"1.1em"
      }
    }
  },
  image: {
    height: '100%'
  },
  tileBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color:"black !important",
    textAlign: 'left',
    // "& span":{
    //   color:"black",
    //   marginBottom:".7em"
    // }
  },
  tileTitle: {
    fontSize:'1.1em',
    marginBottom:'5px',
    color:'black',
    display:'block',
    textDecoration:"none",
    fontWeight:"700",
    letterSpacing:".1em"
  },
  action:{
    margin: '0 10px'
  },
  detailContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    "& > div":{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      margin:"2em 0"
    },
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column"
    }
  }
}))

const Exams = (props) => {
    const classes = useStyles()
    const [col,setCol] = React.useState(4)

    // React.useEffect(() => {
    //   window.addEventListener('')
    // },[])
    return(
      <>
      <Typography variant="h4">Free Past Questions</Typography>
        <GridList cellHeight={220}
         className={classes.gridList}>
             {props.questions.map(({image,name},i) => (
             <GridListTile className={classes.tile}
              key={i} style={{padding:0}}>
             <Link to={"/"}>
                 <img className={classes.image}
                  src={image}
                   alt={name} />
            </Link>
             <GridListTileBar className={classes.tileBar}
               title={
               <Link to={"/"}
                className={classes.tileTitle}>
                    {name}
               </Link>}
              //  subtitle={<span>To prepare for the exams</span>}
               actionIcon={
                 <div className={classes.action}>
                 {/* {true ? <Enroll courseId={item}/> : */}
                  <Link to="/signin">Sign in to Enroll</Link>
                  {/* } */}
                 </div>
               }
             />
           </GridListTile>
           ))}
        </GridList>
       <Box className={classes.detailContainer}> 
       <Box>
      <Typography style={{margin:"1em 0"}} variant="h4">Professional Exams</Typography>
      <GridList cellHeight={150}
          cols={1} >
             {[""].map(({image,name},i) => (
             <GridListTile
              key={i} style={{padding:0}}>
             <Link to={"/"}>
                 <img className={classes.image}
                 style={{borderRadius:"50%",backgroundColor:"whitesmoke"}}
                  src={props.exams[0].image}
                   alt={props.exams[0].name} />
            </Link>
           </GridListTile>
           ))}
        </GridList>
       </Box>
       <Box>
      <Typography style={{margin:"1em 0"}} variant="h4">
        University
      </Typography>
      <GridList cellHeight={150}
          cols={1} >
             {[""].map(({image,name},i) => (
             <GridListTile
              key={i} style={{padding:0}}>
             <Link to={"/"}>
                 <img className={classes.image}
                 style={{borderRadius:"50%",backgroundColor:"whitesmoke"}}
                  src={props.exams[1].image}
                   alt={props.exams[1].name} />
            </Link>
           </GridListTile>
           ))}
        </GridList>
       </Box>
       <Box>
      <Typography style={{margin:"1em 0"}} variant="h4">
        Vocational Courses
      </Typography>
      <GridList cellHeight={150}
          cols={1} >
             {[""].map(({image,name},i) => (
             <GridListTile
              key={i} style={{padding:0}}>
             <Link to={"/"}>
                 <img className={classes.image}
                 style={{borderRadius:"50%",backgroundColor:"whitesmoke"}}
                  src={props.exams[2].image}
                   alt={props.exams[2].name} />
            </Link>
           </GridListTile>
           ))}
        </GridList>
       </Box>
        </Box>
        </>
    )
}

Exams.propTypes = {
    exams:PropTypes.array.isRequired
}
export default Exams
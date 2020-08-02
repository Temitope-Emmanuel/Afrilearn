import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {ExamImage1,ExamImage2,ExamImage3} from "../assets"
import DetailCard from "./detailCard"

const useStyles = makeStyles(theme => ({
    root:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }
}))

const Detail = (props) => {
    const classes = useStyles()


    return(
        <Box className={classes.root}>
            <Typography variant="h3" >
                Free Past Questions
            </Typography>
            {[ExamImage1,ExamImage2,ExamImage3].map((item,idx) => (
                <DetailCard key={idx} image={item} />
            ))}
        </Box>
    )
}


export default Detail
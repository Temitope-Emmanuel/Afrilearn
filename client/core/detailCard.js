import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"


const useStyles = makeStyles(theme => ({

}))

const DetailCard = ({image}) => {
    const classes = useStyles()

    return(
        <Box className={classes.root}>
            <Box>
                {/* <img src={image} /> */}
                <p>This is an image</p>
            </Box>
        </Box>
    )
}

export default DetailCard
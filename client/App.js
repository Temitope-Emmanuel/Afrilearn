import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter as Router} from "react-router-dom"
import {ThemeProvider} from "@material-ui/core"
import {hot} from "react-hot-loader"
import theme from "./theme"


const App = () => {
    return(
        <Router>
            <ThemeProvider theme={theme} >
                <MainRouter/>
            </ThemeProvider>
        </Router>
    )
}

export default hot(module)(App)
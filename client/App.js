import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter as Router} from "react-router-dom"
import {ThemeProvider} from "@material-ui/core"
import {hot} from "react-hot-loader"
import theme from "./theme"
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
    
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if(jssStyles){
            jssStyles.parentNode.removeChild(jssStyles)
        }
    })
    if(typeof window !== "undefined"){
        AOS.init({
          easing: "ease-in",
          duration: 1800
        });
      }
    
    return(
        <Router>
            <ThemeProvider theme={theme} >
                <MainRouter/>
            </ThemeProvider>
        </Router>
    )
}

export default hot(module)(App)

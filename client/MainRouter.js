import React from 'react'
import {Route,Switch, Redirect} from "react-router-dom"
import PrivateRoute from "./auth/PrivateRoute"

import Menu from "./core/Menu"
import Home from "./core/Home"
import Users from "./user/Users"
import Signup from "./user/Signup"
import SignIn from "./auth/Signin"
import Profile from "./user/Profile"
import EditProfile from "./user/EditProfile"

const MainRouter = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={SignIn} />
                <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
                <Route exact path="/user/:userId" component={Profile} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </>
    )
}

export default MainRouter
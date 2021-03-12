import React from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Authentication from "../routes/Authentication"
import Home from "../routes/Home"
import Nav from "components/Nav"
import Profile from "routes/Profile"

const RouterCode = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Nav />}
            <Switch>
                {isLoggedIn ? 
                <>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                </> : <>
                <Route exact path="/">
                    <Authentication/>
                </Route>
                </>
                }
            </Switch>
        </Router>
    )
}

export default RouterCode
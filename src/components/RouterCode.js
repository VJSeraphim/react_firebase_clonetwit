import React from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Authentication from "../routes/Authentication"
import Home from "../routes/Home"

const RouterCode = ({ isLoggedIn }) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? 
                <>
                <Route exact path="/">
                    <Home/>
                </Route>
                </> : 
                <Route exact path="/">
                    <Authentication/>
                </Route>}
            </Switch>
        </Router>
    )
}

export default RouterCode
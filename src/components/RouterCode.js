import React from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Authentication from "../routes/Authentication"
import Home from "../routes/Home"
import Nav from "components/Nav"
import Profile from "routes/Profile"

const RouterCode = ({ userRefresh, isLoggedIn , userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Nav userObj = {userObj}/>}
            <Switch>
                {isLoggedIn ? (
                <div style={{ maxWidth: 890, width: "100%", margin: "0 auto", marginTop: 80, display: "flex", justifyContent: "center"}}>
                    <Route exact path="/">
                        <Home userObj = {userObj}/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile userObj = {userObj} userRefresh = {userRefresh}/>
                    </Route>
                </div> ) : (
                <> 
                    <Route exact path="/">
                    <Authentication />
                    </Route>
                </>
            )}
            </Switch>
        </Router>
    )
}

export default RouterCode
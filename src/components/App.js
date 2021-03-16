import React, {useEffect, useState} from 'react';
import RouterCode from 'components/RouterCode';
import {authService} from "myfbase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    authService.onAuthStateChanged((user) =>{
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
    {init ? <RouterCode isLoggedIn = {isLoggedIn} userObj = {userObj}/>: "Initializing Process Ongoing."}
    <footer>&copy; TwitClone, {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;

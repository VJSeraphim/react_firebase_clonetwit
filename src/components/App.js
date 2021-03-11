import React, {useEffect, useState} from 'react';
import RouterCode from 'components/RouterCode';
import {authService} from "myfbase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    authService.onAuthStateChanged((user) =>{
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
    {init ? <RouterCode isLoggedIn = {isLoggedIn}/>: "Initializing Process Ongoing."}
    <footer>&copy; TwitClone, {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;

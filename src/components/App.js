import React, {useEffect, useState} from 'react';
import RouterCode from 'components/RouterCode';
import {authService} from "myfbase";

function App() {
  const [init, setInit] = useState(false)
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    authService.onAuthStateChanged((user) =>{
      if (user) {
        /* 
        setUserObj(user)
        */
        setUserObj({
          displayName:user.displayName,
          uid:user.uid,
          updateProfile: (args) => user.updateProfile(args)
        })
      } else {
        setUserObj(null)
      }
      setInit(true)
    })
  }, [])
  const userRefresh = () => {
    const user = authService.currentUser
    setUserObj(/*Object.assign({}, user)*/{
      displayName:user.displayName,
      uid:user.uid,
      updateProfile: (args) => user.updateProfile(args)
    })
  } //Update Profile : refreshes user in the firebase, but Nav is not connected to the FB
  return (
    <>
    {init ? <RouterCode userRefresh = {userRefresh} isLoggedIn = {Boolean(userObj)} userObj = {userObj}/>: "Initializing Process Ongoing."}
    <footer>&copy; TwitClone, {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;

import React, {useState} from 'react';
import RouterCode from 'components/RouterCode';
import {authService} from "myfbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  return (
    <>
    <RouterCode isLoggedIn = {isLoggedIn}/>
    <footer>&copy; TwitClone, {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;

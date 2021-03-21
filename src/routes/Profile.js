import { authService, dbService } from 'myfbase'
import {useHistory} from "react-router-dom"
import React, { useEffect } from 'react'

export default ({ userObj }) => { 
    const history = useHistory()
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/")
    }
    const getMyTwits = async() => {
        const twits = await dbService.collection("twits").where("creatorId", "==", userObj.uid)
        console.log(twits.docs.map((doc) => doc.data()))
    }
    useEffect(() =>{
        getMyTwits()
    }, [])
    return (
        <button onClick={onLogOutClick}>Log Out</button> 
    )
}
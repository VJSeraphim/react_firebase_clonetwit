import { authService /*, dbService*/ } from "myfbase"
import {useHistory} from "react-router-dom"
import React, { /*useEffect,*/ useState } from "react"

export default ({ userRefresh, userObj }) => { 
    const history = useHistory()
    const [newDisplayer, setNewDisplayer] = useState(userObj.displayName)
    const onLogOutClick = () => {
        authService.signOut()
        aythService.currentUser.uid
        history.push("/")
    }
    /* const getMyTwits = async() => {
        const twits = await dbService.collection("twits").where("creatorId", "==", userObj.uid).orderBy("createdAt").get() // Needs Index (noSQL DB)
        console.log(twits.docs.map((doc) => doc.data()))
    } */

    const onChange = (event) => {
        const {
            target: {value},
        } =event
        setNewDisplayer(value)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        if (userObj.displayName !== "newDisplayer") {
            await userObj.updateProfile({
                displayName : newDisplayer
            })
            userRefresh()
        }
    }

    /* useEffect(() =>{
        getMyTwits()
    }, []) */

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Display Name" onChange={onChange} value={newDisplayer}/>
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button> 
        </>
    )
}
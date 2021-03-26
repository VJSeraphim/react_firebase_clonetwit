import { authService /*, dbService*/ } from "myfbase"
import {useHistory} from "react-router-dom"
import React, { /*useEffect,*/ useState } from "react"

export default ({ userRefresh, userObj }) => { 
    const history = useHistory()
    const [newDisplayer, setNewDisplayer] = useState(userObj.displayName)
    const onLogOutClick = () => {
        authService.signOut()
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
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input type="text" autoFocus placeholder="Display Name" onChange={onChange} value={newDisplayer} className="formInput"/>
                <input type="submit" value="Update Profile" className="formBtn" style={{marginTop : 10}}/>
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span> 
        </div>
    )
}
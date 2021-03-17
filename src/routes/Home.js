import { dbService } from "myfbase"
import React, {useState, useEffect} from 'react'
import Twittwit from "components/Twittwit"

const Home = ({userObj}) => {
    const [twit, setTwit] = useState("")
    const [existTwits, setExistTwits] = useState([])
    const [attachment, setAttachment] = useState()
    useEffect (() =>{
        dbService.collection("twits").onSnapshot(snapshot => {
            const twitArray = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }))
            setExistTwits(twitArray)
         })
    }, []);

    const onSubmit = async(event) => {
        event.preventDefault()
        await dbService.collection("twits").add({
            text : twit,
            createdAt: Date.now(),
            creatorId : userObj.uid
        })
        console.log("update")
        setTwit("")
    }

    const onChange = (event) => {
        const {
            target : { value }
        } = event
        setTwit(value)
    }
    const onFileChange = (event) =>{
        const {
            target: { files }
        } = event
        const theFile = files[0]
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget : {result}} = finishedEvent
            setAttachment(result)
        }
        reader.readAsDataURL(theFile)
    } 
    const onClearAttachClick = () => setAttachment(null)
   return (
    <div>
        <form onSubmit={onSubmit}>
            <input value= {twit} onChange={onChange} type="text" placeholder="Something on your Mind?" maxLength={120}/>
            <input type="file" accept="image/*" onChange = {onFileChange}/>
            <input type="submit" value="Twit"/>
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px"/>
                    <button onClick={onClearAttachClick}>Clear Image</button>
                </div>
            )}
        </form>
        <div>
            {existTwits.map(twit => (
            <Twittwit key={twit.id} twitObj = {twit} isMaster = {twit.creatorId === userObj.uid}/>
            ))}
        </div>
    </div>
   )
}

export default Home
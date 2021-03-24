import React, {useState} from "react"
import { v4 as uuidv4 } from "uuid"
import {storageService, dbService} from "myfbase"

const TwitShop = ({userObj}) => {
    const [twit, setTwit] = useState("")
    const [attachment, setAttachment] = useState("")
    const onSubmit = async(event) => {
        event.preventDefault()
        let attachmentUrl = ""
        if (attachment !== "") {
            const fileReference = storageService.ref().child(`${userObj.uid}/${uuidv4()}`)
            const fileResponse = await fileReference.putString(attachment, "data_url")
            attachmentUrl = await fileResponse.ref.getDownloadURL()
        }
        const twitObjs = {
            text : twit,
            createdAt: Date.now(),
            creatorId : userObj.uid,
            attachmentUrl
        }
        await dbService.collection("twits").add(twitObjs)
        setTwit("")
        setAttachment("")
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
    const onClearAttachClick = () => setAttachment("")
    return (
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
    )
}

export default TwitShop
import React, {useState} from "react"
import { v4 as uuidv4 } from "uuid"
import {storageService, dbService} from "myfbase"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons"

const TwitShop = ({userObj}) => {
    const [twit, setTwit] = useState("")
    const [attachment, setAttachment] = useState("")
    const onSubmit = async(event) => {
        if (twit === "") {
            return;
        }
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
        <form onSubmit={onSubmit} className="shopForm">
            <div className="shopInput__container">
                <input className="shopInput__input" value={twit} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
                <input type="submit" value="&rarr;" className="shopInput__arrow" />
            </div>
        <label for="attach-file" className="shopInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
        </label>
            <input id="attach-file" type="file" accept="image/*" onChange={onFileChange} style={{ opacity: 0 }}/>
            {attachment && (
                <div className="shopForm__attachment">
                    <img src={attachment} style={{ backgroundImage: attachment }}/>
                    <div className="shopForm__clear" onClick={onClearAttachClick}>
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            )}
        </form>
    )
}

export default TwitShop
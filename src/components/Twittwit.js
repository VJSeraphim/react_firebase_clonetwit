import { dbService, storageService } from "myfbase"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrash, faPencilAlt} from "@fortawesome/free-solid-svg-icons"

const Twittwit = ({twitObj, isMaster}) => {
    const [editTwit, setEditTwit] = useState(false)
    const [newTwit, setNewTwit] = useState(twitObj.text)
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this?")
        console.log(ok)
        if (ok) {
           await dbService.doc(`twits/${twitObj.id}`).delete()
           if (twitObj.attachmentUrl !== "") {
               await storageService.refFromURL(twitObj.attachmentUrl).delete()
           }
        }
    }

    const triggerEdit = () => setEditTwit((prev) =>!prev)
    const onSubmit = async (event) => {
        event.preventDefault()
        await dbService.doc(`twits/${twitObj.id}`).update({
            text : newTwit
        })
        setEditTwit(false)
    }
    const onChange = (event) => {
        const {
            target: {value}
        } = event
        setNewTwit(value)
    }    
    return (
        <div className= "twit">
            {
                editTwit ? (
                <>
                    <form onSubmit = {onSubmit} className="container twitEdit">
                        <input type="text" placeholder="Edit your Twit" value={newTwit} required autoFocus onChange={onChange} className="formInput"/>
                        <input type="submit" value="Update Twit" className="formBtn"/>
                    </form>
                    <span onClick = {triggerEdit} className="formBtn cancelBtn">
                        Cancel 
                    </span>
                </>
                ) : ( 
                    <>
                        <h4>{twitObj.text}</h4>
                            {twitObj.attachmentUrl && <img src={twitObj.attachmentUrl}/>}
                            {isMaster && (
                            <div class="twit__actions">
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                                <span onClick={triggerEdit}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                          </div>
                        )}
                    </>
                )}
        </div>
    )
}

export default Twittwit
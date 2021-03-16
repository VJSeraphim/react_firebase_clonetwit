import { dbService } from "myfbase"
import React, { useState } from "react"

const Twittwit = ({twitObj, isMaster}) => {
    const [editTwit, setEditTwit] = useState(false)
    const [newTwit, setNewTwit] = useState(twitObj.text)
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this?")
        console.log(ok)
        if (ok) {
           await dbService.doc(`twits/${twitObj.id}`).delete()
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
        <div>
            {
                editTwit ? (
                <>
                    <form onSubmit = {onSubmit}>
                        <input type="text" placeholder="Edit your Twit" value={newTwit} required onChange={onChange}/>
                        <input type="submit" value="Update Twit"/>
                    </form>
                    <button onClick = {triggerEdit}> Cancel </button>
                </>
                ) : ( 
                    <>
                        <h4>{twitObj.text}</h4>
                            {isMaster && (
                            <>
                                <button onClick={onDeleteClick}>Delete Twit</button>
                                <button onClick={triggerEdit}>Edit Twit</button>
                            </>
                        )}
                    </>
                )}
        </div>
    )
}

export default Twittwit
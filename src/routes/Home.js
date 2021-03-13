import { dbService } from "myfbase"
import React, {useState} from 'react'

const Home = () => {
    const [twit, setTwit] = useState("")
    const onSubmit = async(event) => {
        event.preventDefault()
        await dbService.collection("twits").add({
            twit,
            createdAt: Date.now()
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

   return (
    <div>
        <form onSubmit={onSubmit}>
            <input value= {twit} onChange={onChange} type="text" placeholder="Something on your Mind?" maxLength={120}/>
            <input type="submit" value="Twit"/>
        </form>
    </div>
   )
}
export default Home
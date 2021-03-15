import { dbService } from "myfbase"
import React, {useState, useEffect} from 'react'

const Home = () => {
    const [twit, setTwit] = useState("")
    const [existTwits, setExistTwits] = useState([])
    const getTwits = async() => {
        const twits = await dbService.collection("twits").get()
        twits.forEach((document) => {
            const twitObj = {
                ...document.data(),
                id: document.id,
            }
            setExistTwits((prev) => [twitObj, ...prev])
        })
    }
    useEffect (() =>{
        getTwits()
    }, [])
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
        <div>
            {existTwits.map(twit => 
            <div key={twit.id}>
                <h4>{twit.twit}</h4>
            </div>)}
        </div>
    </div>
   )
}
export default Home
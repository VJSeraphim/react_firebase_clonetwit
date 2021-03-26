import { dbService } from "myfbase"
import React, {useState, useEffect} from 'react'
import Twittwit from "components/Twittwit"
import TwitShop from "components/TwitShop"

const Home = ({userObj}) => {
    const [existTwits, setExistTwits] = useState([])
    useEffect (() =>{
        dbService.collection("twits").onSnapshot(snapshot => {
            const twitArray = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }))
            setExistTwits(twitArray)
         })
    }, []);

   return (

        <div className="container">
            <TwitShop userObj = {userObj} />
            <div style={{marginTop:30}}>
                {existTwits.map(twit => (
                <Twittwit key={twit.id} twitObj = {twit} isMaster = {twit.creatorId === userObj.uid}/>
                ))}
            </div>
        </div>

   )
}

export default Home
import React, { useState } from "react"
import { authService } from "myfbase"

const AuthShop = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)
    const [error,setError] = useState("")
    const onChange = (event) => {
        const {target: {name, value}} = event
        if (name === "email") {
            setEmail(value)
        } else if (name ==="password") {
            setPassword(value)
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault()
        try {
            let data
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email, password
                )
            }
            console.log(data)
        } catch(error) {
            setError(error.message)
        }
    }

    const toggleAccount = () =>{
        setNewAccount((prev) => !prev)
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <input name= "email" type= "email" placeholder="email" required value={email} onChange= {onChange}/>
                <input name= "password" type= "password" placeholder= "Password" required value={password} onChange= {onChange}/>
                <input type="submit" value= {newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Log In" : "Create Account"}</span>
        </>
    )
}

export default AuthShop
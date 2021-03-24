import React from "react"
import { authService, firebaseInst } from 'myfbase'

const AuthSocial = () => {

    const onSocialClick = async(event) => {
        const {target:{name}} = (event)
        let provider
        if (name === "Google") {
            provider = new firebaseInst.auth.GoogleAuthProvider()
        } else if (name ==="Github") {
            provider = new firebaseInst.auth.GithubAuthProvider()
        }
        await authService.signInWithPopup(provider)
    }
    return (
        <>
            <button onClick = {onSocialClick} name="Google">Continue with Google</button>
            <button onClick = {onSocialClick} name="Github">Continue with Github</button>
        </>
    )
}

export default AuthSocial
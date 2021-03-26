import React from "react"
import { authService, firebaseInst } from 'myfbase'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGoogle, faGithub} from "@fortawesome/free-brands-svg-icons"

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
        <div className ="authBtns">
            <>
                <button onClick = {onSocialClick} name="Google" className="authBtn">Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>
                <button onClick = {onSocialClick} name="Github" className="authBtn">Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
            </>
        </div>
    )
}

export default AuthSocial
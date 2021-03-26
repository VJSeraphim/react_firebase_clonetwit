import React from 'react'
import AuthShop from "components/AuthShop"
import AuthSocial from "components/AuthSocial"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

const Authentication = () => {

    return (
    <div className="authContainer"><FontAwesomeIcon icon={faTwitter} color="#04AAFF" size="3x" style={{marginBottom: 30}}/>
        <AuthShop />
        <div>
            <AuthSocial />
        </div>
    </div>
    )
}

export default Authentication
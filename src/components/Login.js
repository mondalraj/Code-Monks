import React from 'react'
import { useEffect, useState } from 'react'
import Sawo from "sawo"

const Login = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        var config = {
            containerID: "sawo-container",
            identifierType: "phone_number_sms",
            apiKey: "293839f2-276e-41c0-a352-e1dc01ac9d91",
            onSuccess: (payload) => {
                setIsLogin(true);
                window.location = '/home';
            }
        };
        let sawo = new Sawo(config);
        sawo.showForm();
    }, []);
    return (
        <div style={{ borderRadius: '10px !important' }}>
            <div id="sawo-container" style={{ marginTop: "20px", height: "300px", width: "400px", borderRadius: '10px !important' }}></div>
        </div>
    )
}

export default Login

import React from 'react';
import AppBar from '../components/AppBar';
import LoginAndSignIn from '../components/LoginAndSignIn'
const Login = () => {
    return (
        <div>
            <AppBar />
            <div className="">
                <LoginAndSignIn />
            </div>
        </div>
    );
};

export default Login;
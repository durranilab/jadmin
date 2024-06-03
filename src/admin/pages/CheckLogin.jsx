import React, {useState} from 'react';
import Login from "./Login";
import Navigation from "./Navigation";

const CheckLogin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <div>
            {isLoggedIn ? <Navigation/> : <Login/>}
        </div>
    );
};

export default CheckLogin;

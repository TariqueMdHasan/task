// import React from 'react';
// // import Login from './login';
// import Body from './container/body';


// function Amain(){

//     return(
//         <div>
//          {/* <Login /> */}
//          <Body />
//         </div>
//     )
// }

// export default Amain;

import React, { useState } from 'react';
import Login from './login';
import Body from './container/body';


function Amain(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return(
        <div>

        {isLoggedIn ? (
            <Body onLogout={handleLogout} />
        ) : (
            <Login onLogin={handleLogin} />
        )}

        </div>
    )
}

export default Amain;

// body and login pages are changed and the change is written in the last line of both pages
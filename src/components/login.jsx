import React, {useState} from 'react';

import '../components/login.css';
import Art from '../assets/Art.png';
import View from '../assets/view.png';

function Login({ onLogin }){
    const [passwordType, setPasswordType] = useState('password');
    const [isLogin, setIsLogin] = useState(true);


    const showLogin = () => setIsLogin(true);
    const showRegister = () => setIsLogin(false);
    

    const togglePasswordVisibility = () => {
        if (passwordType === 'password'){
            setPasswordType('text');
            
        }else{
            setPasswordType('password');
            
        }
    }

    return(
        <div class="Login-Main">
            <div class="Login-Left">
                <div class="Login-images">
                    {/* <img src={Back} alt='back' /> */}
                    <img src= {Art} alt="A robot" class="Art-image"/>
                </div>
                <div class="Login-Left-Text" >
                    <h2>Welcome aboard my friend</h2>
                    <h4>Just a couple of clicks and we start</h4>
                </div>
            </div>
            {isLogin ? (
            <div class="Login-Right">
                <h2>Login</h2> <br />
                
                <input 
                type="text" 
                placeholder="Email" 
                class="Login-Right-Email" /> <br />

                <input 
                placeholder="Password" 
                class="Login-Right-Password" 
                type={passwordType} /> <br />
                
                <img 
                src={View} 
                
                id="togglePassword"
                alt="Show/Hide Password"
                
                onClick={togglePasswordVisibility}
                />
                <button class="login-btn-1 btn" onClick={onLogin}>Log in</button> <br />
                <h4>Have no account yet?</h4> <br />
                <button class="Register-btn btn" onClick={showRegister}>Register</button>
            </div>
            ) : ( 
            <div className='Registration-Right'>
                <h2>Register</h2> <br />
                
                <input 
                type="text" 
                placeholder="Name" 
                class="Registration-Right-Name" /> <br />

                <input 
                type="text" 
                placeholder="Email" 
                class="Registration-Right-Email" /> <br />

                <input 
                type="password"
                placeholder="Password" 
                class="Registration-Right-Password" /> <br />


                <input 
                placeholder="Confirm Password" 
                class="Registration-Right-Password" 
                type="password" /> <br />
                
                <button class="login-btn btn" >Register</button> <br />
                <h4>Have an account</h4> <br />
                <button class="Register-btn btn" onClick={showLogin}>Login</button>
            </div>
            )}
        </div>
    )
}

export default Login;

// originally line was like this
// function Login({ onLogin }){
// <button class="login-btn btn" onClick={onLogin}>Log in</button> <br />
import React from 'react';
import '../container/setting.css';


function Settings(){

    return(
        <div className='Setting'>
            <div className='Setting-Header'>
                <h2>Settings</h2>
            </div>
            <div className='Forms'>
                <input 
                type="text" 
                placeholder="Name" 
                class="Name" /> <br />

                <input 
                type="text" 
                placeholder="Update Email" 
                class="Email" /> <br />

                <input 
                type="password"
                placeholder="Old Password" 
                class="Password" /> <br />


                <input 
                placeholder="New Password" 
                class="Password" 
                type="password" /> <br />
                
                <button class="update-btn" >Update</button> <br />
            </div>
        </div>
    )
}

export default Settings;
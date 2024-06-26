import React, { useState } from 'react';
import '../container/body.css';
import Board from '../container/board';
import Analytics from '../container/analytics';
import Settings from '../container/setting';

import HeaderImage from '../../assets/codesandbox.png';
import Database from '../../assets/database.png';
import Layout from '../../assets/layout.png';
import Setting from '../../assets/settings.png';
import Logout from '../../assets/Logout.png';


// function Body() {
//     const [selectedDiv, setSelectedDiv] = useState(null);

    
//     const handleClick = (divNumber) => {
//         setSelectedDiv(divNumber);
//     };



//     return (
//         <div className='Body'>
//             <div className='Body-Left'>
//                 <div className='Body-Left-Header'>
//                     <img src={HeaderImage} alt="Header-icon" />
//                     <h3>Pro Manage</h3>
//                 </div>


//                 {/*  'Body-Left-Board myDiv'   'Body-Left-Analytics myDiv'   'Body-Left-Setting myDiv'*/}

//                 <div
//                     className={`Body-Left-Board myDiv ${selectedDiv === 1 ? 'changed' : ''}`}
//                     onClick={() =>  handleClick(1)}
//                 >
//                     <img src={Layout} alt="Layout-icon" />
//                     <h3>Board</h3>
//                 </div>
//                 <div
//                     className={`Body-Left-Analytics myDiv ${selectedDiv === 2 ? 'changed' : ''}`}
//                     onClick={() => handleClick(2)}
//                 >
//                     <img src={Database} alt="Database-icon" />
//                     <h3>Analytics</h3>
//                 </div>
//                 <div
//                     className={`Body-Left-Setting myDiv ${selectedDiv === 3 ? 'changed' : ''}`}
//                     onClick={() => handleClick(3)}
//                 >
//                     <img src={Setting} alt="Setting-icon" />
//                     <h3>Setting</h3>
//                 </div>

//                 <div className='Body-Left-Logout'>
//                     <img src={Logout} alt="Logout-icon" />
//                     <h3>Logout</h3>
//                 </div>
//             </div>





//             <div className='Body-Right'>
//                 {/* <Board /> */}
//                 {/* <Analytics /> */}
//                 <Settings />
                
//             </div>
//         </div>
//     )
// }

// export default Body;





function Body({ onLogout }) {
    const [activeComponent, setActiveComponent] = useState('Board');
    const [activeNav, setActiveNav] = useState('Board');

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
        setActiveNav(componentName);
    };


    const renderComponent = () => {
        switch (activeComponent) {
        case 'Board':
            return <Board />;
        case 'Analytics':
            return <Analytics />;
        case 'Settings':
            return <Settings />;
        default:
            return <Board />;
        }
    };



    return (
        <div className='Body'>
            <div className='Body-Left'>
                <div className='Body-Left-Header'>
                    <img src={HeaderImage} alt="Header-icon" />
                    <h3>Pro Manage</h3>
                </div>


                {/*  'Body-Left-Board myDiv'   'Body-Left-Analytics myDiv'   'Body-Left-Setting myDiv'*/}

                <div
                    className={`Body-Left-Board myDiv ${activeNav === 'Board' ? 'changed' : ''}`}
                    onClick={() =>  handleClick('Board')}
                >
                    <img src={Layout} alt="Layout-icon" />
                    <h3>Board</h3>
                </div>
                <div
                    className={`Body-Left-Analytics myDiv ${activeNav === 'Analytics' ? 'changed' : ''}`}
                    onClick={() => handleClick('Analytics')}
                >
                    <img src={Database} alt="Database-icon" />
                    <h3>Analytics</h3>
                </div>
                <div
                    className={`Body-Left-Setting myDiv ${activeNav === 'Settings' ? 'changed' : ''}`}
                    onClick={() => handleClick('Settings')}
                >
                    <img src={Setting} alt="Setting-icon" />
                    <h3>Setting</h3>
                </div>

                <div className='Body-Left-Logout' onClick={onLogout}>
                    <img src={Logout} alt="Logout-icon" />
                    <h3>Logout</h3>
                </div>
            </div>





            <div className='Body-Right'>
                {/* <Board /> */}
                {/* <Analytics /> */}
                {/* <Settings /> */}
                {renderComponent()}
            </div>
        </div>
    )
}

export default Body;

// original lines was like this
// function Body() {
// <div className='Body-Left-Logout' onClick={onLogout}>
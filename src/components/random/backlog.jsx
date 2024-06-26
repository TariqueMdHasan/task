import React from 'react';
import '../random/backlog.css';
import Collapse from '../../assets/collapse.png';


function Backlog(props){
  // const [expandedIndex, setExpandedIndex] = useState(null);


  // const collapseAll = () => {
  //   setExpandedIndex(null);
  // };


  return(
    <div className='Main'>
      <div className='Main-top'>
        <div className='Main-top-left'>
          <h3>{props.title}</h3>
        </div>
        <div className='Main-top-right'>
          <img src={Collapse} alt="collapse"  />
        </div>
      </div>
    </div>
  )
}
  

export default Backlog;
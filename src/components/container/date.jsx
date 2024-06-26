import React from 'react';
import "../container/date.css";


const CurrentDate = () => {
  const date = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-IN', options);

  return (
    <div>
      <div className='Date-Des'>{formattedDate}</div>
    </div>
  );
};

export default CurrentDate;
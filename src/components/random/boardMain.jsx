import React from 'react';
import '../random/boardMain.css';
import Todo from '../random/todo';
import Section from '../random/backlog';

function BoardMain(){

    return(
        <div className='boardMain-parent'>
            <div className='boardMain'>
                <Section title="Backlog" className="section" />
                <Todo className="section" />
                <Section title="In Progress" className="section" />
                <Section title="Done" className="section" />
            </div>
        </div>
    )
}

export default BoardMain;
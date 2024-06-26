import React from 'react';
import '../container/analytics.css';

function Analytics() {

    return (
        <div className='Analytics-Main'>
            <h2>Analytics</h2>
            <div className='Analytics-Main-Down'>
                <div className='Analytics-Main-Left'>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>Backlog Tasks</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>To-do Tasks</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>In-Progress Tasks</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>Completed Tasks</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                </div>

                <div className='Analytics-Main-Right'>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>Low Priority</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>High Priority</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>Moderate Priority</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div>
                        <div className='circle'></div>
                        <div className='Task-Name'>
                            <h3>Due Date Tasks</h3>
                            <h3>0</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics;
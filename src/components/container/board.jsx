import React from 'react';
import '../container/board.css';
import CurrentDate from '../container/date';
import BoardMain from '../random/boardMain';

function Board() {

    return (
        <div className='Board-Main'>
            <div className='Board-Top'>
                <div className='Board-Top-Up'>
                    <h2>Welcome! Name</h2>
                    <CurrentDate />
                </div>
                <div className='Board-Top-Down'>
                    <h2>Board</h2>
                    <select>
                        <option>
                            Today
                        </option>
                        <option>
                            This Week
                        </option>
                        <option>
                            This Month
                        </option>
                    </select>
                </div>
            </div>



            <div className='Board-Bottom'>
                <BoardMain />
            </div>
        </div>
    )
}

export default Board;
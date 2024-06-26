import React, { useState } from 'react';
import Column from '../random/column';

const Board = () => {
  const [cards, setCards] = useState({
    backlog: [{ id: 1, text: 'Task 1' }, { id: 2, text: 'Task 2' }],
    inProgress: [{ id: 3, text: 'Task 3' }],
    done: [{ id: 4, text: 'Task 4' }],
  });

  const moveCard = (id, newColumn) => {
    let cardToMove;
    const newCards = { ...cards };

    Object.keys(newCards).forEach((column) => {
      newCards[column] = newCards[column].filter((card) => {
        if (card.id === id) {
          cardToMove = card;
          return false;
        }
        return true;
      });
    });

    newCards[newColumn].push(cardToMove);
    setCards(newCards);
  };

  return (
    <div style={boardStyle}>
      <Column id="backlog" title="Backlog" cards={cards.backlog} moveCard={moveCard} />
      <Column id="inProgress" title="In Progress" cards={cards.inProgress} moveCard={moveCard} />
      <Column id="done" title="Done" cards={cards.done} moveCard={moveCard} />
    </div>
  );
};

const boardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px',
  backgroundColor: '#ebecf0',
  minHeight: '100vh',
};

export default Board;

import React, { useState } from 'react';
import Modal from './modal';
import '../random/todo.css';
import Collapse from '../../assets/collapse.png';
import DownArrow from '../../assets/down.png';
import UpArrow from '../../assets/up.png';




const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [todoLists, setTodoLists] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addTodoList = (newTodoList) => {
    if (editMode && editIndex !== null) {
      const newTodoLists = [...todoLists];
      newTodoLists[editIndex] = newTodoList;
      setTodoLists(newTodoLists);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setTodoLists([...todoLists, newTodoList]);
    }
  };

  const handleEditTodoList = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDeleteTodoList = (index) => {
    const newTodoLists = todoLists.filter((_, i) => i !== index);
    setTodoLists(newTodoLists);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const countCompletedTodos = (todos) => todos.filter(todo => todo.completed).length;




  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  const collapseAll = () => {
    setExpandedIndex(null);
  };




  return (
    <div className='Main'>
      <div className='Main-top'>
        <div className='Main-top-left'>
          <h3>To do</h3>
        </div>
        <div className='Main-top-right'>
          <button onClick={toggleModal} className='Plus-button'>+</button>
          {/* <img src={Collapse} alt="collapse" /> */}
          <img src={Collapse} alt="collapse" onClick={collapseAll} />
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={toggleModal}
        onSubmit={addTodoList}
        editMode={editMode}
        existingData={editMode ? todoLists[editIndex] : null}
      />
      <div className='ticket'>
        {todoLists.map((list, index) => (
          <div key={index} className="todo-list-container">
            <div className="main-todo-header">
              <div>
                <h3 className='title'>{list.title}</h3>
                <p className='priority'>{list.priority}</p>
                <p className='checklist'>Checklist ({countCompletedTodos(list.todos)} / {list.todos.length}) </p>
              </div>
              <button
                  className="expand-button"
                  onClick={() => toggleExpand(index)}
                  >

                    <img src={expandedIndex === index ? UpArrow : DownArrow} alt="toggle expand" />

                </button>
            </div>
            {expandedIndex === index && (
              <ul className="todo-list">
                {list.todos.map((todo, todoIndex) => (
                  <li key={todoIndex} className="todo-item">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => {
                        const newTodoLists = [...todoLists];
                        newTodoLists[index].todos[todoIndex].completed = !newTodoLists[index].todos[todoIndex].completed;
                        setTodoLists(newTodoLists);
                      }}
                    />
                    <input
                      type="text"
                      value={todo.text}
                      onChange={(e) => {
                        const newTodoLists = [...todoLists];
                        newTodoLists[index].todos[todoIndex].text = e.target.value;
                        setTodoLists(newTodoLists);
                      }}
                      className="todo-text"
                    />

                  </li>
                ))}
              </ul>
            )}
            
            <div className='all-btns'>
              <p className='date'>{formatDate(list.date)}</p>
              <div className='btn-names'>
                <button>BACKLOG</button>
                <button>IN PROGRESS</button>
                <button>DONE</button>
                
              </div>
            </div>



            <div className="dropdown">
              <button className="dropdown-button">...</button>



              <div className="dropdown-content">
                <button className="edit-button" onClick={() => handleEditTodoList(index)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => handleDeleteTodoList(index)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;



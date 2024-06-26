
import React, { useState, useEffect } from 'react';
import '../random/modal.css';
import deleteIcon from '../../assets/Delete.png';



const Modal = ({ show, onClose, onSubmit, editMode, existingData }) => {
  const initialTodoState = [{ text: '', completed: false }];
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low priority');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState(initialTodoState);

  useEffect(() => {
    if (show) {
      if (editMode && existingData) {
        setTitle(existingData.title);
        setPriority(existingData.priority);
        setDate(existingData.date);
        setTodos(existingData.todos);
      } else {
        setTitle('');
        setPriority('Low priority');
        setDate('');
        setTodos(initialTodoState);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, editMode, existingData]);

  const handleTodoChange = (index, field, value) => {
    const newTodos = [...todos];
    newTodos[index][field] = value;
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    setTodos([...todos, { text: '', completed: false }]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleSubmit = () => {
    const newTodoList = { title, priority, date, todos };
    onSubmit(newTodoList);
    onClose();
  };

  const countCompletedTodos = () => todos.filter(todo => todo.completed).length;

  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>


        <h2 className='title' >Title</h2>
        <div className="modal-header">

          <input
            className='input-title'
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}

          />
        </div>



        <div className="priority-options">
          <p className='Select-Priority'>Select Priority </p>
          {['HIGH PRIORITY', 'MODERATE PRIORITY', 'LOW PRIORITY'].map((p) => (
            <div
              key={p}
              className={`priority-option ${priority === p ? 'selected' : ''}`}
              onClick={() => setPriority(p)}
            >
              <span className={`bullet ${p.toLowerCase().replace(' ', '-')}-bullet`}></span> 
              {p}
            </div>
            
          ))}
        </div>

        <p className='Checklist'>Checklist ({countCompletedTodos()} / {todos.length})</p>

        <div className='todo-container'>
          <div className="modal-todo-container">
            <ul className="modal-todo-list">
              {todos.map((todo, index) => (
                <li key={index} className="modal-todo-item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleTodoChange(index, 'completed', !todo.completed)}
                  />
                  <input
                    type="text"
                    value={todo.text}
                    onChange={(e) => handleTodoChange(index, 'text', e.target.value)}
                    className="modal-todo-text"
                  />
                  <button className="delete-button" onClick={() => handleDeleteTodo(index)}>
                    {/* &times; */}
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleAddTodo} className='add-btn'>+ Add New</button>
        </div>
        <div className='last-btns'>
          <div className="date-input">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            

            </div>
            <div className='btns'>
              <button onClick={onClose} className='btn-1'>Cancel</button>
              <button onClick={handleSubmit} className='btn-2'>Save</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {action} from '../actions';
import {todoState} from '../reducers';

const customStyles = {
  content : {
    background:'#66CDAA',
    textAlign:'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }
};

const btnStyles = {
    padding: '5px 12px',
    color: '#66CDAA',
    background: '#FFFFFF',
    height:'fit-content',
    alignSelf:'center',
    fontSize: '16px',
    fontWeight: '600',
    outline: 'none',
    border: 'none',
    borderRadius: '3px',
    boxShadow: '0 1px 5px 0 rgba(0,0,0,0.1) !important' 
}

const inputStyles = {
    padding:'10px 5px',
    fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
}

Modal.setAppElement('#root');

const Button = (props) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [type,setType] = React.useState(todoState.todo);
    const [task,setTask] = React.useState('');

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo({task:task, type:type});
        setIsOpen(false);
    }
    
    return(
        <div>
        <button onClick={openModal} className="btn">
            New Task
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around' }}>
                <h2 style={{ color:"#FFFFFF" }}>Add New Task</h2>
                <button className="modal-btn" onClick={closeModal} style={ btnStyles }>close</button>  
            </div>
          
            <form style={{ display:'flex' , flexDirection:'column', gap:'10px' }}>
                <input style={inputStyles} onChange={e => setTask(e.target.value)} type="text" id="task" placeholder="Write Task" />
                <select style={inputStyles} onChange={e => setType(e.target.value)} defaultValue={type}>
                    <option value={todoState.todo}>To Do</option>
                    <option value={todoState.inprogress}>In Progress</option>
                    <option value={todoState.done}>Done</option>
                </select>
                <button className="modal-btn" onClick={(e) => handleSubmit(e)} type="submit" style={ btnStyles }>Submit</button>
            </form>
        </Modal>
        </div>
    );
}

export default connect(null,{ addTodo: action.addTodo })(Button);
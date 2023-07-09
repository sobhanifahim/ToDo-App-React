import './App.css';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDo from './components/form';
import { useState } from 'react';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
     
      <input type='checkbox' onClick={() => markTodo(index)} className='done'></input>
      
      <p style={{ textDecoration: todo.isDone ? "line-through" : "" }} className='text'>{todo.text}</p>
      
      <Button variant="outline-danger" onClick={() => removeTodo(index)} className='remove'>✕</Button> 
    </div>

  );
}



function App() {
  const [todos, setTodos]=useState([]);

  const addTodo=(text)=>{
     const newTodo=[...todos,{text}];
     setTodos(newTodo)
  };
  const delTodo=(index)=>{
    const newTodo=[...todos];
    newTodo.splice(index,1);
    setTodos(newTodo);
  };
  const marktodo=(index)=>{
    const newTodo=[...todos];
    newTodo[index].isDone=true;
    setTodos(newTodo);
  };
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddToDo addTodo={addTodo}/>
      <div>
        {todos.map((todo,index)=>(
          <Card className='card'>
               <Card.Body>
                <Todo  key={index} index={index} todo={todo} markTodo={marktodo} removeTodo={delTodo}/>
               </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;

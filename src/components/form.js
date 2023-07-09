import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import formDes from './form.module.css'
import 'react-datepicker/dist/react-datepicker.css';

export default function AddToDo({addTodo}){
const [value,setValue]=useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    if(!value ) return;
    addTodo(value);
    setValue("");
    
    
};


return(
    <Form onSubmit={handleSubmit} className={formDes.formdiv}>
        <Form.Group>
            <Form.Label className={formDes.label}><b>Set your ToDo</b></Form.Label>
            <Form.Control type="text" className={formDes.todoinput} onChange={(e)=>setValue(e.target.value) } placeholder="Set Your Task"></Form.Control>
              
        </Form.Group>
    
        <Button variant="primary mb-3" type="submit" className={formDes.set}>Set</Button>
    </Form>
);



}
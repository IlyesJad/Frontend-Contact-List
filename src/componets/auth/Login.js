import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

const Login = () => {
    const [show, setShow] = useState(false);

    
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handelLogin =()=>{
      const userLogin ={email,Password}
      dispatch(loginUser(userLogin))
      setEmail("");
      setPassword("")

    }
    
   
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
        
     
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="Password" value={Password} onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
     
      
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handelLogin();handleClose()}}>Login</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Login
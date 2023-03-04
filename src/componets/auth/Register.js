import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';

const Register = () => {
  
    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const dispatch= useDispatch();

    const handelRegister =()=>{
      const newUser ={name, lastName,email,Password}
      dispatch(registerUser(newUser))
      setName("");
      setLastName("");
      setEmail("");
      setPassword("")

    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Register
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
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Name" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Last Name" name="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
      </Form.Group>
     
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
            <Button variant="primary" onClick={()=>{handelRegister();handleClose()}} >Register</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  
}

export default Register
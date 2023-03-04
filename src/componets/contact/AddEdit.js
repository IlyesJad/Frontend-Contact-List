import React, { useEffect, useReducer, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { editContact, postContact } from '../../redux/actions/contactActions';

const AddEdit = () => {
  const dispatch = useDispatch();
  const [ user, setUser] = useState({name:"",email:"",phone:""})

  const userReducer = useSelector (state => state.contactReducer.user);

  console.log(userReducer);

const edit = useSelector(state => state.editReducer.edit);
console.log(edit);


useEffect(()=>{
  if(edit&&userReducer === undefined) {return}
  edit ? setUser(userReducer) : setUser({name:"",email:"",phone:""})
},[userReducer,edit]);

  const handelChange = (e) =>{
    e.preventDefault();
    setUser({...user,[e.target.name]: e.target.value})
  }
  const handleContact = ()=>{
    if(!edit){
      dispatch(postContact(user))
    }else {
      dispatch(editContact(userReducer._id, user))
    }
  }
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" value={user.name} name="name" onChange={handelChange} />          
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={handelChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Phone number" value={user.phone} name="phone" onChange={handelChange} />
      </Form.Group>
      <Link to="/contact_list">
      <Button variant="primary" onClick={handleContact}>
        Save
      </Button>
      </Link> 
    </Form>
  )
}

export default AddEdit
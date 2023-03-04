import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteContact, getContact } from '../../redux/actions/contactActions';
import { useDispatch } from 'react-redux';
import { toggleTrue } from '../../redux/actions/editActions';
import { Link } from 'react-router-dom';


const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '50%', margin: '0 auto' }} src="https://raw.githubusercontent.com/WLAN-Kabel/iobroker.contact/HEAD/admin/contact.png" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Link to={`/edit/${contact._id}`}>
          <Button variant="success" onClick={() => { dispatch(getContact(contact._id)) ; dispatch(toggleTrue()) }}>Edit</Button>
        </Link>
        <Button variant="danger" onClick={() => { dispatch(deleteContact(contact._id)) }}>Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default Contact
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/actions/contactActions';
import Contact from './Contact';

const ContactList = () => {
    const contacts = useSelector((state) => state.contactReducer.contacts)
    const loadContact = useSelector((state)=> state.contactReducer.loadContact)
    console.log(contacts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts())
        //eslint-disable-next-line
    },[])
  return (
    <div className='container'>
        {loadContact ? (
            <h2>Loading</h2>
        ) : contacts.length === 0 ? (<h2>there is no contact</h2>)
          : contacts.map((contact => <Contact contact={contact} key={contact._id} />))
    }
    </div>
  )
}

export default ContactList
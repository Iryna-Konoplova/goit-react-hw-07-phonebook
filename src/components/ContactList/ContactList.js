// Модули
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

// Компоненты
import ContactListItem from '../ContactListItem/ContactListItem';
import contactsAction from '../../redux/contacts/contacts-action';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

// Стили
import styles from '../ContactList/contactList.module.css';


const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeletContact = id => dispatch(contactsAction.deleteContact(id))

  return (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeletContact={()=> onDeletContact(id)}
      />
    ))}
  </ul>
)};


export default ContactList;
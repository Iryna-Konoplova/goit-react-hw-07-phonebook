// Модули
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contacts/add', ({ name, number }) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    }, 
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');


// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };




// // Redux

// import types from './contacts-types';
// import shortid from 'shortid';


// const addContact = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     },
// });

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })

// export default { addContact, deleteContact, changeFilter };
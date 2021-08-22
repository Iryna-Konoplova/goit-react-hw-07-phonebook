// Модули
import { createAction } from '@reduxjs/toolkit';


export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// const addContact = createAction('contacts/add', ({ name, number }) => ({
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     }, 
// }));

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');


// eslint-disable-next-line
// export default { addContactRequest, addContactSuccess, addContactError, addContact, deleteContact, changeFilter };

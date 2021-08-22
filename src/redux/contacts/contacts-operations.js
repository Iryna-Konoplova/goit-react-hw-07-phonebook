// Модули
import axios from 'axios';
// import actions from './contacts-action';
import {addContactRequest, addContactSuccess, addContactError,} from './contacts-action';

axios.defaults.baseURL = 'http://localhost:3000';

const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};


// eslint-disable-next-line
export default {
    addContact,
};
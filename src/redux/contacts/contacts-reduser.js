// Модули
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// Компоненты
// import actions from './contacts-action'
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContact,
    changeFilter
} from './contacts-action';


const items = createReducer([], {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
    items,
    filter,
    loading,
});


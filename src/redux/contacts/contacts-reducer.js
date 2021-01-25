import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

import store from '../store';

// const parseContacts = JSON.parse(localStorage.getItem('contacts'));
// const initialContacts = parseContacts ? parseContacts : [];

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, action) => {
    const newContacts = [...state, action.payload];
    // localStorage.setItem('contacts', JSON.stringify(newContacts));

    return newContacts;
  },

  [deleteContactSuccess]: (state, action) => {
    const filteredContacts = state.filter(
      contact => contact.id !== action.payload,
    );

    // localStorage.setItem('contacts', JSON.stringify(filteredContacts));

    return filteredContacts;
  },
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload, // _ — так позначається параметр, який не використовується
});

const error = createReducer(null, {});

export default combineReducers({ contacts, filter, loading, error });

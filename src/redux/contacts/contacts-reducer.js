import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './contacts-types';
import actions from './contacts-actions';
import store from '../store';

const parseContacts = JSON.parse(localStorage.getItem('contacts'));
const initialContacts = parseContacts ? parseContacts : [];

// const contacts = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       const newContacts = [...state, payload];
//       localStorage.setItem('contacts', JSON.stringify(newContacts));
//       return newContacts;

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const contacts = createReducer(initialContacts, {
  [actions.addContact]: (state, action) => {
    const newContacts = [...state, action.payload];
    // localStorage.setItem('contacts', JSON.stringify(newContacts));

    return newContacts;
  },

  [actions.deleteContact]: (state, action) => {
    const filteredContacts = state.filter(
      contact => contact.id !== action.payload,
    );

    // localStorage.setItem('contacts', JSON.stringify(filteredContacts));

    return filteredContacts;
  },
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FLTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload, // _ — так позначається параметр, який не використовується
});

export default combineReducers({ contacts, filter });

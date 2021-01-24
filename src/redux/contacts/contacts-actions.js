import types from './contacts-types';
import { v4 as uuid } from 'uuid';

import { createAction } from '@reduxjs/toolkit';

// const addContact = (name, number) => ({
//   type: types.ADD,

//   payload: {
//     id: uuid(),
//     name: name,
//     number: number,
//   },
// });

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: uuid(),
    name: name,
    number: number,
  },
}));

// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

const deleteContact = createAction('contacts/delete');

// const changeFilter = value => ({
//   type: types.CHANGE_FLTER,
//   payload: value,
// });

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, filter, deleteContact }) => (
  <ul>
    {contacts.map(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) && (
          <li key={item.id}>
            {item.name}: {item.number}{' '}
            <button id={item.id} type="button" onClick={deleteContact}>
              Delete
            </button>
          </li>
        ),
    )}
  </ul>
);

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: e => dispatch(contactsActions.deleteContact(e.target.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

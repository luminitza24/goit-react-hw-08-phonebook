import './list.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selector';
import Notiflix from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleDelete = id => dispatch(deleteContact(id));
  const filterText = useSelector(state => state.filters.filterText);

  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return Notiflix.Notify.failure('No contact was found please try again!');
  }
 const handleEdit=(id)=> dispatch(editContact(id));
  return (
    <div className='contacts'>
      <h1>Contacts</h1>
    <ul className="contact-list">
      {filteredContacts.map(contact => (
        <li key={contact.id} className="contact-item">
          {contact.name
            .split(' ')
            .map(n => n.charAt(0).toUpperCase() + n.slice(1))
            .join(' ')}{' '}
          : {contact.number}
          <button
            className="button"
            type="button"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            {' '}
            Delete{' '}
          </button>
          <button
            className="button"
            type="button"
            onClick={() => {
              handleEdit(contact.id);
            }}
          >
            {' '}
           Edit{' '}
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
};

console.log(ContactList);

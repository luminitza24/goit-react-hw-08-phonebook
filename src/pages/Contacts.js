import { Form } from '../components/form/Form';
import { selectContacts } from '../redux/contacts/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectFilters } from '../redux/contacts/selector';
import { Search } from '../components/search/Search';
import { ContactList } from '../components/list/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  return (
    <main className="contacts-main">
      <Form />
      {contacts.length > 0 && <ContactList />}
      {contacts.length > 1 && <Search />}
      {filter && contacts.length === 0 && filter.length === 0 && (
        <h3>Add contacts to be displayed</h3>
      )}
    </main>
  );
};
export default Contacts;

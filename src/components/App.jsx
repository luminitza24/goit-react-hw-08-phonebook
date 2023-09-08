import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selector';
import { Form } from 'components/form/Form';
import { ContactList } from 'components/list/ContactList';
import { Search } from './search/Search';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <Form />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2 className="subtitle">Contacts</h2>
      <Search />
      <ContactList />
    </div>
  );
};

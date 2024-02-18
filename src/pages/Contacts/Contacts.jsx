import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import { fetchContacts } from 'components/redux/contacts/operations';
import { selectError } from 'components/redux/contacts/selectors';

const Contacts = () => {
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className="container mt-5">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col">
          <h1 className="mb-4">Phonebook</h1>
          <ContactForm />
        </div>
        <div className="col">
          <h2 className="mb-3">Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </div>
  );
};
export default Contacts;

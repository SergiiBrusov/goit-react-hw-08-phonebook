import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { LoadingDelete } from '../ContactsList/LoadingDelete';
import { Button } from 'react-bootstrap'; // Импорт компонента кнопки Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт стилей Bootstrap
import './ContactItem.css'; // Импорт ваших дополнительных стилей

export const ContactItem = ({ name, number, id, phone }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const [isDelete, setIsDelete] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = id => {
    setIsDelete(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => setIsDelete(false));
  };

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const updateContacts = e => {
    e.preventDefault();
    const form = e.target;
    const newContact = {
      name: contactName,
      number: contactNumber,
      contactId: id,
    };
    form.reset();

    dispatch(updateContact(newContact));
    toggleShow();
  };

  const handleChange = e => {
    if (e.target.name === 'name') setContactName(e.target.value);
    if (e.target.name === 'number') setContactNumber(e.target.value);
  };

  return (
    <li className="contact-item">
      {isShow ? (
        <form onSubmit={updateContacts}>
          <input
            type="text"
            name="name"
            placeholder="Change the name"
            value={contactName}
            onChange={handleChange}
            className="form-control"
          />
          <input
            type="text"
            name="number"
            placeholder="Change the number"
            value={contactNumber}
            onChange={handleChange}
            className="form-control"
          />
          <Button type="submit" variant="primary" className="save-btn">
            💾 Save
          </Button>
        </form>
      ) : (
        <span className="contact-details">
          {name}: {number || phone}
        </span>
      )}
      <section className="buttons">
        <Button
          type="button"
          onClick={() => toggleShow()}
          variant="secondary"
          className="edit-btn"
        >
          {isDelete ? <LoadingDelete /> : '\u270e Edit'}
        </Button>
        <Button
          type="button"
          onClick={() => handleDelete(id)}
          variant="danger"
          className="delete-btn"
        >
          {isDelete ? <LoadingDelete /> : '\u2716 Delete'}
        </Button>
      </section>
    </li>
  );
};

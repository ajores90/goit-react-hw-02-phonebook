import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsContainer,
  ContactItem,
  DeleteButton,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  const handleDelete = id => {
    onDeleteContact(id);
  };

  return (
    <ContactsContainer>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsContainer>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;

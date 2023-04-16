import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsContainer,
  ContactItem,
  DeleteButton,
} from './ContactsList.styled';

class ContactsList extends React.Component {
  handleDelete = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { contacts } = this.props;

    return (
      <ContactsContainer>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton onClick={() => this.handleDelete(contact.id)}>
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
      </ContactsContainer>
    );
  }
}

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

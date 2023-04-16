import React from 'react';
import Notiflix from 'notiflix';
import { Form, ContactsList, Filter, Title } from './index';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onAddContact = (name, number, id) => {
    const { contacts } = this.state;
    const isHaveContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isHaveContact) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id,
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <Title title="Phonebook" />
        <Form onSubmit={this.onAddContact} />
        <Title title="Contacts" />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;

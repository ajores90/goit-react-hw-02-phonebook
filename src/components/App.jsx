import React from 'react';
import Contacts from './Phonebook/Form/Form';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onAddContact = (name, number, id) => {
    const { contacts } = this.state;
    const isExistContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: id,
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <Contacts onSubmit={this.onAddContact} />
      </div>
    );
  }
}

export default App;

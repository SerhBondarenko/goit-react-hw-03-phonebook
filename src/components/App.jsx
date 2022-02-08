import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm'
import ContactFilter from './ContactFilter/ContactFilter'
const shortid = require('shortid');

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56',},
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12',},
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79',},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26',},
    ],
    filter: '',
  };
//============== принимает и записывает данные с компонента Filter в state ======
  changeFilter = (e) => { 
    this.setState({filter: e.currentTarget.value})
  };
  //============= удаление контакта из списка ========
  deleteContact = (contactId) => { 
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };
  //========= принимает данные с компонента Form ====
  //========= добавляет данные в  state =============
  //======== выводит alert если контакт уже есть в state =======
  formSubmitHandler = data => {
    console.log(data)
    const message = `${data.name} is alredy in contacts`;
    const findName = this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    const findNumber = this.state.contacts.find(contact => contact.number === data.number);

    if (findName || findNumber !== undefined) {
      alert(message);
      return
    };
    
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number
    }
    this.setState((prevState) => ({
  contacts: [contact, ...prevState.contacts],
}))
  };
//============================= render ===================
  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return (
       <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={this.changeFilter} />
      <ContactList
        contacts={filterContacts}
        onDeleteContact={this.deleteContact}
        />
        </section>
    )
   }
};
export default App;








  /*handleNameChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value })
  };
  const learnedContactCount = contacts.reduce((acc, contact) => (contact.learned ? acc + 1 : acc), 0);
   <p>Количиство выученных на память: {learnedContactCount}</p>

    const totalContacts = contacts.length;
    <p>Total number of contacts: {totalContacts}<br /></p>
*/
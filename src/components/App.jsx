
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from "./Container";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import css from "./App.module.css";


class App extends Component  {

 state = {
   contacts:  [],
   filter: '',
  }

  // Додає новий контакт
  addContacts = ({name, number}) => {
    console.log({name, number});
    const newContact = {
      id: nanoid(),
      name,
      number,
    
    } 

    // знаходить збіг по імені, виводимо повідомлення
    const matchName = this.state.contacts.find(contact => contact.name === name);

    if (matchName) {
      alert(`${name} is already in contacts`)
      return;
    }
    // додаємо контак до попередніх(розпилюємо)
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  // Видаляє контакт
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  // слідкує за полем фільтрації і пише у state(filter)
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  // фільтрує і повертає результат фільтра
  getVisibleContact = () => {
    const {contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));  
  }

  componentDidMount() {
    // console.log("app render");

    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts })
    } 
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);
    // console.log(prevState);
    if (this.state.contacts !== prevState.contacts) {
      // console.log("записую новий контакт в localStorage");

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    
    return (
      <>
        <Container>
      <h2 className={css.title}>Phonebook</h2>
        <Form onSubmit={this.addContacts} />
  
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
          />
          
        </Container>  
</>
)}};

export default App;






  // getCompletedContacts = () => {
  //   const { contacts } = this.state;

  //   return contacts.reduce(
  //     (contact, total) => (contact.completed ? total + 1 : total), 0);
  // }


  // const totalContactsCount = contacts.length;
    // const completedContactsCount = this.getCompletedContacts()


  //    formSubmitHandler = data => {
  // console.log(data);
  //   }
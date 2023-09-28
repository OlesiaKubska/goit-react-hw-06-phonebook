import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { deleteContact, setContacts } from "redux/contactsSlice";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import contactsData from "./contacts.json";
import { Section } from "./Section/Section";
import { Header } from "./Header/Header";
import { AppContainer } from "./AppContainer/AppContainer";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContacts(contactsData));
  }, [dispatch]);

  const handleDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <AppContainer>
      <Section title="Phone Book">
        <ContactForm />
        <Header title="Contacts" />
        <Filter />
        <ContactList onDeleteContact={handleDeleteContact} />
      </Section>
    </AppContainer>
  );
};
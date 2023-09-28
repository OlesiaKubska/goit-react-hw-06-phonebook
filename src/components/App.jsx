import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";
import { Header } from "./Header/Header";
import { AppContainer } from "./AppContainer/AppContainer";

export const App = () => {
  return (
    <AppContainer>
      <Section title="Phone Book">
        <ContactForm />
        <Header title="Contacts" />
        <Filter />
        <ContactList />
      </Section>
    </AppContainer>
  );
};
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/contactsSlice";
import { selectFilteredContacts } from "redux/selectors";
import {
    ContactListContainer,
    ContactListItem,
    DeleteButton,
} from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts); 
    const dispatch = useDispatch();

    return (
        <ContactListContainer>
            {contacts.map((contact) => (
                <ContactListItem key={contact.id}>
                    {contact.name} - {contact.number}
                    <DeleteButton type="button" onClick={() => dispatch(deleteContact(contact.id))}>
                        Delete
                    </DeleteButton>
                </ContactListItem>
            ))}
        </ContactListContainer>
    );
};
import { createContext, useState, useRef } from "react";
const ContactsContext = createContext();
import contacts from "../../Data/ContactData";
import { v4 as uuidv4 } from 'uuid';
const ContactsContextProvider = ({children}) => {

    const [contacts_state, setContactsState] = useState(contacts);

    const getContactById = (contact_id) => {
        return contacts_state.find(
            contact => contact.id === Number(contact_id)
        )
    }

    const addNewMessageToContact = (text, contact_id) => {
        
        const new_message = {
            author: 'Yo', 
            text: text, 
            id: uuidv4(), 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        }
        setContactsState(
            (prev_contacts_state) => {
                const new_contacts_state = prev_contacts_state.map(
                    (contact) => {
                        if (contact.id == contact_id) {
                            contact.messages = [...contact.messages, new_message]
                        }
                        return contact
                    }
                )
                return new_contacts_state
            }
        )
    }
    
    return (    
        <ContactsContext.Provider value={
            {
                contacts_state: contacts_state,
                getContactById: getContactById,
                addNewMessageToContact: addNewMessageToContact
            }
        }>
            {children}
        </ContactsContext.Provider>
    )
}
export {ContactsContext, ContactsContextProvider}
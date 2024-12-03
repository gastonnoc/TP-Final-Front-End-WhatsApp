import React from "react";
import "../Styles/sideBar.css";
import { ContactsContext } from "../Context/ContactsContext";
import { useContext } from "react";
import Contact from "./Contact";
import { IoCameraOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const ContactList = () => {
  useContext(ContactsContext);

  const { contacts_state } = useContext(ContactsContext);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Chats</h1>
          <div className="sidebarHeaderIcons">
            <IoCameraOutline size={23}/>
              <div  className="dots">
                <BsThreeDotsVertical size={23}/>
              </div>
          </div>
      </div>
      {contacts_state.map((contact) => {
        return (
          <div className="contact-list">
            <Contact
              name={contact.name}
              id={contact.id}
              key={contact.id}
              image={contact.image}
              status={contact.status}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;

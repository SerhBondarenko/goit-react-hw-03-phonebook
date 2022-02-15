import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        <ContactListItem
          contacts={contacts}
          onDeleteContact={onDeleteContact}
        />
      </ul>
    </div>
  );
};

export default ContactList;

//========================== propTypes ===================
 ContactList.propTypes = {
   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
   onDeleteContact: PropTypes.func.isRequired,
 };
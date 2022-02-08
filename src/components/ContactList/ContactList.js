import React from "react";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{' '}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
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
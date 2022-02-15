import React from 'react';
import PropTypes from 'prop-types';


  const ContactListItem = ({ contacts, onDeleteContact }) => { 

    return( contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{' '}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        )))
};

export default ContactListItem;

 ContactListItem.propTypes = {
   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
   onDeleteContact: PropTypes.func.isRequired,
 };
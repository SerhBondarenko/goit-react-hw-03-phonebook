import React, { Component } from 'react';
import PropTypes from 'prop-types';
const shortid = require('shortid');


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  //========================== propTypes ===================
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  //========= генерация уникального id =================
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  //============ паттерн одного обработчика ============
  //========= обновляет данные в state =================
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  //======================== добавление контакта  =========
  //================== предает данные в App ===============
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  //====================== reset формы ====================
  //==== можно сделать initialState  в (конспекте)
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  //=========================== render ====================
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className='submitBtn'>Add contact</button>
      </form>
    );
  }
};

export default ContactForm;
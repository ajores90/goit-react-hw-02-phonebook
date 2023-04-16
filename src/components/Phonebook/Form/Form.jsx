import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  InputContainer,
  ButtonContainer,
} from './Form.styled';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    onSubmit(name, number, nanoid());
    event.target.reset();
  };

  nameId = nanoid();
  numberId = nanoid();

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <InputContainer>
          <StyledLabel htmlFor={this.nameId}>
            Name
            <StyledInput
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor={this.numberId}>
            Number
            <StyledInput
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </StyledLabel>
        </InputContainer>
        <ButtonContainer>
          <StyledButton type="submit">Add contact</StyledButton>
        </ButtonContainer>
      </StyledForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

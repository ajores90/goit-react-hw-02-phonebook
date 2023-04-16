import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterTitle, FilterInput } from './Filter.styled';

class Filter extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <FilterContainer>
        <FilterTitle>Search contacts by name</FilterTitle>
        <FilterInput
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name to search"
        />
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

import { StyledTitle } from './Title.styled';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

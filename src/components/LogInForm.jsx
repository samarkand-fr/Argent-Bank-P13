import PropTypes from 'prop-types'
import styled from 'styled-components';
import {capitalizeFirstChar} from '../utils'


/**
 * Component that renders an input field with a label for login-related forms.
 * @param {Object} props - The component props.
 * @param {string} props.forAndId - The "for" and "id" attribute for the input and label elements.
 * @param {string} props.inputType - The type of input element (e.g., 'text', 'password', etc.).
 * @param {string} props.direction - The direction of the input and label layout ('column' or 'row').
 * @param {string} props.value - The value of the input field.
 * @param {function} props.onChange - The function to handle input changes.
 * @returns {JSX.Element} - The rendered JSX element representing the input field and label.
 */
const LogInForm = ({ forAndId, inputType, direction, value, onChange }) => {
  return (
    <InputWrapper direction={direction}>
      <InputLabel  htmlFor={forAndId}>
        {capitalizeFirstChar(forAndId)}
      </InputLabel>
      <InputStyle
        type={inputType}
        id={forAndId}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

// Prop type 
LogInForm.propTypes = {
  forAndId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func 
}


export default LogInForm

// Styled components 
const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  margin-bottom: 1rem;
`
const InputLabel = styled.label`
  font-weight: bold;
  color: #2c3e50;
`
const InputStyle = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  &:hover {
    border: 2px solid #2c3e50;
    border-radius: .2rem;
  }
`
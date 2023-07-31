import PropTypes from 'prop-types'

import styled from 'styled-components';
import {capitalizeFirstChar} from '../utils'

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

LogInForm.propTypes = {
  forAndId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func 
}


export default LogInForm

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
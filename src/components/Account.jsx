import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Component representing a single account entry.
 * @param {Object} props - The props containing the account details.
 * @param {string} props.title - The title of the account.
 * @param {number} props.amount - The account amount.
 * @param {string} props.description - The description of the account.
 * @returns {JSX.Element} - The rendered JSX element representing the account.
 */
const Account = ({ title, amount, description }) => {
  return (
    <AccountArticle>
      <AccountContentWrapper>
        {/* Display the account title */}
        <AccountTitle>{title}</AccountTitle>

        {/* Display the account amount */}
        <AccountAmount>${amount.toLocaleString('en')}</AccountAmount>

        {/* Display the account description */}
        <AccountDescription>{description}</AccountDescription>
      </AccountContentWrapper>

      {/* Display a "View transactions" button */}
      <ButtonWrapper>
        <InputButton type="button" value="View transactions" width="100%" />
      </ButtonWrapper>
    </AccountArticle>
  );
};

// PropTypes for type checking the props
Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;

// Styled components for the Account
const AccountArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #2c3e50;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  flex-direction: row;
  padding: 0.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-top: 1rem;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
`;

const AccountContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the start of the container */
  margin-left: 1rem;
  width: 100%;
  padding: 0.5rem;
`;

const AccountTitle = styled.h4`
  margin: 0;
  padding-top: 0.5rem;
  font-size: 1rem;
  font-weight: normal;
  color: #2c3e50;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 720px) {
    font-size: 2.2rem;
  }
  @media (max-width: 520px) {
    font-size: 2rem;
  }
`;

const AccountDescription = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #2c3e50;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const InputButton = styled.input`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-color: #42b983;
  background-color: #42b983;
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0.35rem;
  &:hover {
    border-color: #2c3e50;
    background-color: #2c3e50;
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

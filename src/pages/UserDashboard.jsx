import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate } from 'react-router'
// datas imports
import account from '../datas/account'
import Account from '../components/Account'
// API calls
import { editUser } from '../Redux/services/API'
import styled from 'styled-components'



const User = () => {

  const [editName, setEditName] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const selectUser = (state) => state.getUser.user.body
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const { firstName, lastName } = user || {};

  const editUserName = () => {
    dispatch(editUser(newFirstName, newLastName))
    setEditName(false)
  }

  if (!user) {
    return <Navigate to="/" />;
  }
  
  return (
    <>
      <UserHeaderMain>
        <Title >
          Welcome back
          <br />
          {firstName} {lastName}
        </Title>
        {editName ? (
          <EditNameWrapper>
            <InputWrapper>
              <InputStyle
                value={newFirstName}
                placeholder={firstName}
                type="text"
                onChange={(e) => {
                  setNewFirstName(e.target.value)
                }}
              />
              <InputStyle
                value={newLastName}
                placeholder={lastName}
                type="text"
                onChange={(e) => {
                  setNewLastName(e.target.value)
                }}
              />
            </InputWrapper>
            <ButtonsWrapper>
              <InputButtonsStyle type="submit" value="Save" onClick={editUserName} />
              <InputButtonsStyle
                type="button"
                value="Cancel"
                onClick={() => {
                  setEditName(false)
                }}
              />
            </ButtonsWrapper>
          </EditNameWrapper>
        ) : (
          <InputButton
            type="button"
            onClick={() => {
              setEditName(true)
            }}
            value="Edit Name"
          />
        )}
      </UserHeaderMain>

      <h3 className="sr-only">Accounts</h3>
      <SectionAccount>
        {account.map((ac, index) => (
          <Account
            key={index}
            title={ac.title}
            amount={ac.amount}
            description={ac.description}
          />
        ))}
      </SectionAccount>
    </>
  )
}


export default User




export const UserHeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  background-color: #12002b; 
`
const Title = styled.h2`
  color:white;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.1rem;
`
const EditNameWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.7rem;
  padding-top: 1rem;
  width: 100%;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
const InputStyle = styled.input`
  padding: 0.5rem 0.8rem;
  color: #2c3e50;
  border-radius: 0.3rem;
  border:#bfc8d3
  height: 1.5rem;
  margin: 0 0.4rem;
  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 720px) {
    width: 12rem;
  }

  @media (max-width: 520px) {
    margin: 0.6rem 0 0 0;
    width: 100%;
  }
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const InputButtonsStyle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.8rem;
  color: #42b983;
  font-size: 1.1rem;
  font-weight: 700;
  border: 2px solid #42b983;
  border-radius: 0.3rem;
  width: 7.5rem;
  margin: 0 0.4rem;
  cursor: pointer;
  &:hover {
    border-color: #2c3e50;
    background-color: #2c3e50;
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`
const SectionAccount = styled.section`
  padding:  5.8rem;
  background-color:#12002b;
  @media (max-width: 520px) {
    padding: 0;
  }

`
const InputButton = styled.input`
  display: flex;
  justify-content: center;
  width:10rem ;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
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
`
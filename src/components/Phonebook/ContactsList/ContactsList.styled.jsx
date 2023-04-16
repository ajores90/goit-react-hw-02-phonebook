import styled from '@emotion/styled';

export const ContactsContainer = styled.ul`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 450px;
  box-sizing: border-box;
  padding-left: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

export const DeleteButton = styled.button`
  background-color: #f64c4c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #d63c3c;
  }
`;

import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 300px;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  width: 300px;

  &:hover {
    background-color: #444;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 30px;
`;

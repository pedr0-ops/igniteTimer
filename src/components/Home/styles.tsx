import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const ButtonActionBase = styled.button`
  height: 4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.3rem;
  font-weight: bold;

  color: ${(props) => props.theme['gray-100']};

  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }

  transition: background-color 0.2s;
`

export const ButtonPlayContainer = styled(ButtonActionBase)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const ButtonStopContainer = styled(ButtonActionBase)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`

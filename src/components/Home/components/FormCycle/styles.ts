import styled from 'styled-components'

export const FormHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
export const BaseInput = styled.input`
  background-color: transparent;
  border-right: none;
  color: ${(props) => props.theme['gray-500']};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 1.125rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &:hover {
    outline: none;
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  transition: border-color 0.2s;
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const AmountMinutesInput = styled(BaseInput)`
  width: 4.5rem;
  display: flex;
  text-align: center;
`

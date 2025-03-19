import styled from 'styled-components'

export type ButtonVariantType = 'primary' | 'secondary' | 'danger' | 'success'

export interface ButtonProps {
  variant: ButtonVariantType
}

export const ButtonStyled = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`

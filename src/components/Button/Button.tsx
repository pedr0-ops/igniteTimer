import { ButtonProps, ButtonStyled } from './Button.styles'

export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonStyled variant={variant}>Enviar</ButtonStyled>
}

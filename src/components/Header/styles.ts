import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};

      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      } // seletor & é o seletor do elemento pai

      &.active {
        color: ${(props) => props.theme['green-500']};
      }

      transition: border 0.2s;
    }
  }
`

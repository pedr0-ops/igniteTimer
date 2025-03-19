import styled from 'styled-components'

export const CountDownContainer = styled.div`
  width: 100%;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const CountDownSeparator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  display: flex;
  width: 4rem;
  justify-content: center;
  overflow: hidden;
`

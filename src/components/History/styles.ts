import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  flex: 1;
  gap: 2rem;
`

export const HistoryTitle = styled.h1`
  font-family: 'roboto', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
`

export const HistorBody = styled.div`
  flex: 1;
  overflow: auto;
`

export const TableContent = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
`

export const TableHead = styled.thead`
  tr {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.6;
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
  }

  th {
    padding: 1rem 2rem;
    text-align: left;
  }

  th:first-child {
    border-top-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
  }
`

export const TableBody = styled.tbody`
  tr {
    background-color: ${(props) => props.theme['gray-700']};
    border-top: ${(props) => props.theme['gray-800']} 4px solid;
  }

  td {
    padding: 1rem 2rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 1.6;

    &:first-child {
      width: 50%;
    }
  }
`

const statusColors = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusTaskProps {
  statusColor: keyof typeof statusColors
}

export const StatusTask = styled.span<StatusTaskProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[statusColors[props.statusColor]]};
  }
`

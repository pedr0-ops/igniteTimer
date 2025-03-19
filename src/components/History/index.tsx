import { useContext } from 'react'
import {
  HistoryContainer,
  HistorBody,
  HistoryTitle,
  TableContent,
  TableHead,
  TableBody,
  StatusTask,
} from './styles'
import { CyclesContext } from '../../contexts/CicleContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export const History = () => {
  const { cicles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <HistoryTitle>Meu histórico</HistoryTitle>
      <HistorBody>
        <TableContent>
          <TableHead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </TableHead>
          <TableBody>
            {cicles.map((cicle) => {
              return (
                <tr key={cicle.id}>
                  <td>{cicle.task}</td>
                  <td>{`${cicle.minutesAmount} minutos`}</td>
                  <td>
                    {formatDistanceToNow(cicle.date, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cicle.finishedDate && (
                      <StatusTask statusColor="red">Concluido</StatusTask>
                    )}
                    {cicle.interruptedDate && (
                      <StatusTask statusColor="red">Interrompido</StatusTask>
                    )}
                    {!cicle.interruptedDate && !cicle.finishedDate && (
                      <StatusTask statusColor="yellow">Rolando</StatusTask>
                    )}
                  </td>
                </tr>
              )
            })}
          </TableBody>
        </TableContent>
      </HistorBody>
    </HistoryContainer>
  )
}

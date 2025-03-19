import { differenceInSeconds } from 'date-fns'
import { CountDownContainer, CountDownSeparator } from './styles'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CicleContext'

export const CountDown = () => {
  const {
    currentCicle,
    currentCicleId,
    markCurrentCicleAsFinished,
    cicleTimeSecondsPassed,
    setCicleTimePassed,
  } = useContext(CyclesContext)

  const totalSeconds = currentCicle ? currentCicle.minutesAmount * 60 : 0

  const CurrentTime = currentCicle ? totalSeconds - cicleTimeSecondsPassed : 0

  const minutes = Math.floor(CurrentTime / 60)
  const seconds = CurrentTime % 60

  const formatedMinutes = String(minutes).padStart(2, '0')
  const formatedSeconds = String(seconds).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (currentCicleId && currentCicle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(currentCicle.date),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCicleAsFinished()
          clearInterval(interval)
        } else {
          setCicleTimePassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    currentCicleId,
    currentCicle,
    totalSeconds,
    markCurrentCicleAsFinished,
    setCicleTimePassed,
  ])

  useEffect(() => {
    if (currentCicle) {
      document.title = `${formatedMinutes}:${formatedSeconds}`
    }
  }, [currentCicle, formatedMinutes, formatedSeconds])

  return (
    <CountDownContainer>
      <span>{formatedMinutes[0]}</span>
      <span>{formatedMinutes[1]}</span>
      <CountDownSeparator>:</CountDownSeparator>
      <span>{formatedSeconds[0]}</span>
      <span>{formatedSeconds[1]}</span>
    </CountDownContainer>
  )
}

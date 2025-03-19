import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cicle, newCicleFormType } from '../utils/types'
import { ciclesReducer } from '../reducers/cicles/ciles'
import {
  addNewCicleAction,
  markCurrentCicleAsFinishedAction,
  stopCurrentCicleAction,
} from '../reducers/cicles/actions'
import { differenceInSeconds } from 'date-fns'
import { localStorageService } from '../services/localStorageService'

type CicleContextProps = {
  children: ReactNode
}

export type CicleContextType = {
  currentCicleId: string | null
  currentCicle: Cicle | undefined
  cicleTimeSecondsPassed: number
  cicles: Cicle[]
  markCurrentCicleAsFinished: () => void
  setCicleTimePassed: (time: number) => void
  createNewCicle: (data: newCicleFormType) => void
  stopCurrentCicle: () => void
}

export const CyclesContext = createContext<CicleContextType>(
  {} as CicleContextType,
)

export const CicleContextProvider = ({ children }: CicleContextProps) => {
  const [ciclesState, dispatchCiclesState] = useReducer(
    ciclesReducer,
    {
      cicles: [],
      currentCicleId: null,
    },
    (initState) => localStorageService.getCiclesSate() || initState,
  )

  const { cicles, currentCicleId } = ciclesState

  const currentCicle = cicles.find(
    (cicle: Cicle) => cicle.id === currentCicleId,
  )

  const [cicleTimeSecondsPassed, setCicleTimeSecondsPassed] = useState(() => {
    return currentCicle
      ? differenceInSeconds(new Date(), new Date(currentCicle.date))
      : 0
  })

  const createNewCicle = (data: newCicleFormType) => {
    const newCicle: Cicle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      date: new Date(),
    }

    dispatchCiclesState(addNewCicleAction(newCicle))

    setCicleTimePassed(0)
  }

  const stopCurrentCicle = () => {
    dispatchCiclesState(stopCurrentCicleAction())
  }

  const markCurrentCicleAsFinished = () => {
    dispatchCiclesState(markCurrentCicleAsFinishedAction())
  }

  const setCicleTimePassed = (time: number) => {
    setCicleTimeSecondsPassed(time)
  }

  useEffect(() => {
    localStorageService.setCiclesState(ciclesState)
  }, [ciclesState])

  return (
    <CyclesContext.Provider
      value={{
        currentCicleId,
        currentCicle,
        cicleTimeSecondsPassed,
        cicles,
        markCurrentCicleAsFinished,
        setCicleTimePassed,
        createNewCicle,
        stopCurrentCicle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

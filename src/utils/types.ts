export interface Cicle {
  id: string
  task: string
  minutesAmount: number
  date: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface newCicleFormType {
  task: string
  minutesAmount: number
}

export interface CicleState {
  cicles: Cicle[]
  currentCicleId: string | null
}

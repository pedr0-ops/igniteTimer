/* eslint-disable @typescript-eslint/no-explicit-any */
import { CicleState } from '../utils/types'

interface LocalStorageService {
  setCiclesState(ciclesState: CicleState): void
  getCiclesSate(): any | null
}

export const localStorageService: LocalStorageService = {
  setCiclesState(ciclesState: CicleState) {
    const cicleJson = JSON.stringify(ciclesState)
    localStorage.setItem('@pomodoro:cicles', cicleJson)
  },
  getCiclesSate() {
    const ciclesFromStorage = localStorage.getItem('@pomodoro:cicles')
    if (ciclesFromStorage) {
      return JSON.parse(ciclesFromStorage)
    }
  },
}

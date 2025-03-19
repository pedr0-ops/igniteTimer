import { CicleState } from '../../utils/types'
import { produce } from 'immer'

export enum CicleActionTypes {
  ADD_CICLE = 'ADD_CICLE',
  STOP_CURRENT_CICLE = 'STOP_CURRENT_CICLE',
  FINISH_CURRENT_CICLE = 'FINISH_CURRENT_CICLE',
}

export function ciclesReducer(state: CicleState, action: any) {
  switch (action.type) {
    case CicleActionTypes.ADD_CICLE:
      return produce(state, (draft) => {
        draft.cicles.push(action.payload.cicle)
        draft.currentCicleId = action.payload.currentCicleId
      })
    case CicleActionTypes.STOP_CURRENT_CICLE: {
      const currentCicleIndex = state.cicles.findIndex(
        (cicle) => cicle.id === state.currentCicleId,
      )

      if (currentCicleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cicles[currentCicleIndex] = {
          ...draft.cicles[currentCicleIndex],
          interruptedDate: new Date(),
        }

        draft.currentCicleId = null
      })
    }
    case CicleActionTypes.FINISH_CURRENT_CICLE: {
      const currentCicleIndex = state.cicles.findIndex(
        (cicle) => cicle.id === state.currentCicleId,
      )

      if (currentCicleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cicles[currentCicleIndex] = {
          ...draft.cicles[currentCicleIndex],
          finishedDate: new Date(),
        }

        draft.currentCicleId = null
      })
    }
    default:
      return state
  }
}

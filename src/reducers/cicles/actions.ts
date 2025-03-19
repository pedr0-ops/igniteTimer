import { Cicle } from '../../utils/types'
import { CicleActionTypes } from './ciles'

export function addNewCicleAction(newCicle: Cicle) {
  return {
    type: CicleActionTypes.ADD_CICLE,
    payload: {
      cicle: newCicle,
      currentCicleId: newCicle.id,
    },
  }
}

export function stopCurrentCicleAction() {
  return {
    type: CicleActionTypes.STOP_CURRENT_CICLE,
  }
}

export function markCurrentCicleAsFinishedAction() {
  return {
    type: CicleActionTypes.FINISH_CURRENT_CICLE,
  }
}

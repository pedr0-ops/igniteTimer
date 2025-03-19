import { Play, HandPalm } from '@phosphor-icons/react'

import {
  ButtonPlayContainer,
  ButtonStopContainer,
  HomeContainer,
} from './styles'
import { FormCycle } from './components/FormCycle'
import { CountDown } from './components/CountDown'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Zod from 'zod'
import { newCicleFormType } from '../../utils/types'
import { CyclesContext } from '../../contexts/CicleContext'
import { useContext } from 'react'

const newCicleFormSchema = Zod.object({
  task: Zod.string().min(1, 'Adicione um nome para o projeto'),
  minutesAmount: Zod.number().min(5, 'Adicione um tempo mínimo de 5 minutos'),
})

export const Home = () => {
  const { createNewCicle, currentCicle, stopCurrentCicle } =
    useContext(CyclesContext)
  const formCicle = useForm<newCicleFormType>({
    resolver: zodResolver(newCicleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { watch, handleSubmit, reset } = formCicle

  const watchTask = watch('task')
  const watchMinutesAmount = watch('minutesAmount')
  const disableSubmitTask = !watchTask || !watchMinutesAmount

  const handleCreateNewCicle = (newCicle: newCicleFormType) => {
    createNewCicle(newCicle)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormProvider {...formCicle}>
          <FormCycle />
        </FormProvider>
        <CountDown />

        {currentCicle ? (
          <ButtonStopContainer type="button" onClick={stopCurrentCicle}>
            <HandPalm size={24} />
            Interromper
          </ButtonStopContainer>
        ) : (
          <ButtonPlayContainer type="submit" disabled={disableSubmitTask}>
            <Play size={24} />
            Começar
          </ButtonPlayContainer>
        )}
      </form>
    </HomeContainer>
  )
}

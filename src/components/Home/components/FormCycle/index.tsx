import { AmountMinutesInput, FormHeaderContainer, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'

export const FormCycle = () => {
  const { register } = useFormContext()
  return (
    <FormHeaderContainer>
      <label>Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="name-project"
        placeholder="Dê um nome para o seu projeto"
        list="task-options"
        {...register('task')}
      />

      <datalist id="task-options">
        <option value="Estudar" />
        <option value="Trabalhar" />
        <option value="Exercícios" />
        <option value="Ler" />
        <option value="Assistir" />
      </datalist>

      <label>durante</label>
      <AmountMinutesInput
        type="number"
        id="aumont-minutes"
        placeholder="00"
        step={5}
        max={60}
        min={5}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormHeaderContainer>
  )
}

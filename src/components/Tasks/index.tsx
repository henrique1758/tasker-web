/* eslint-disable camelcase */
import React from 'react'
import { Container } from './styles'
import { Task } from './Task'

interface Task {
  id: string
  content: string
  created_at: Date
  updated_at: Date
}

interface TasksProps {
  tasks: Task[]
}

function Tasks({ tasks }: TasksProps): JSX.Element {
  return (
    <Container>
      {tasks?.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </Container>
  )
}

export { Tasks }

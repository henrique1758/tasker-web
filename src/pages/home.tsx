/* eslint-disable camelcase */
import { Plus } from 'phosphor-react'
import React, { useState } from 'react'
import { CreateTaskModal } from '../components/CreateTaskModal'
import { Header } from '../components/Header'
import { Tasks } from '../components/Tasks'
import { useAuth } from '../contexts/AuthContext'
import { setupApiClient } from '../services/api'
import {
  AddTaskContainer,
  HeadingContainer,
  HelloMessage,
  PlusButton,
  TasksMessage
} from '../styles/pages/Home'
import { withSSRAuth } from '../utils/withSSRAuth'

interface Task {
  id: string
  content: string
  created_at: Date
  updated_at: Date
}

interface HomeProps {
  tasks: Task[]
}

function Home({ tasks }: HomeProps): JSX.Element {
  const { user } = useAuth()

  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false)

  function handleOpenCreateTaskModal() {
    setIsCreateTaskModalOpen(true)
  }

  function handleCloseCreateTaskModal() {
    setIsCreateTaskModalOpen(false)
  }

  return (
    <>
      <Header />

      <HeadingContainer>
        <HelloMessage>
          <h3>
            Hello, <span>{user?.name}!</span>
          </h3>
        </HelloMessage>

        <TasksMessage>
          <h3>
            You’ve got <span>{tasks.length > 1 ? `${tasks.length} tasks!` : `${tasks.length} task!`}</span>
          </h3>
        </TasksMessage>
      </HeadingContainer>

      <AddTaskContainer>
        <TasksMessage>
          <h3>Your Tasks</h3>
        </TasksMessage>

        <PlusButton onClick={handleOpenCreateTaskModal}>
          <Plus size={20} fontWeight="bold" />
        </PlusButton>
      </AddTaskContainer>

      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        onClose={handleCloseCreateTaskModal}
      />

      <Tasks tasks={tasks} />
    </>
  )
}

export default Home

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get('tasks');

  const tasks = response.data;

  return {
    props: {
      tasks
    }
  }
})

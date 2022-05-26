import { PencilSimple, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import DeleteTaskModal from '../DeleteTaskModal'
import UpdateTaskModal from '../UpdateTaskModal'
import { Buttons, Content, TaskButton, TaskContainer } from './styles'

interface TaskProps {
  task: {
    id: string
    content: string
  }
}

function Task({ task }: TaskProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const [isUpdateTaskModalOpen, setIsUpdateTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);

  function handleOpenUpdateTaskModal() {
    setIsUpdateTaskModalOpen(true)
  }

  function handleCloseUpdateTaskModal() {
    setIsUpdateTaskModalOpen(false)
  }

  function handleOpenDeleteTaskModal() {
    setIsDeleteTaskModalOpen(true)
  }

  function handleCloseDeleteTaskModal() {
    setIsDeleteTaskModalOpen(false)
  }

  return (
    <TaskContainer>
      <Content isChecked={isChecked}>
        <input
          type="checkbox"
          id="task"
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="task">{task.content}</label>
      </Content>

      <Buttons>
        <TaskButton onClick={handleOpenUpdateTaskModal}>
          <PencilSimple className="pencil" />
        </TaskButton>

        <TaskButton onClick={handleOpenDeleteTaskModal}>
          <TrashSimple className="trash" />
        </TaskButton>
      </Buttons>

      <UpdateTaskModal
        isOpen={isUpdateTaskModalOpen}
        onClose={handleCloseUpdateTaskModal}
        task={task}
      />

      <DeleteTaskModal
        isOpen={isDeleteTaskModalOpen}
        onClose={handleCloseDeleteTaskModal}
        taskId={task.id}
      />
    </TaskContainer>
  )
}

export { Task }

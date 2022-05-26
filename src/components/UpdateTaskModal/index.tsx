import { useRouter } from 'next/router'
import { XCircle } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/apiClient'
import { Button } from '../Button'
import { Form, Input, InputGroup } from './styles'

interface Task {
  id: string
  content: string
}

interface UpdateTaskModalProps {
  isOpen: boolean
  onClose: () => void
  task: Task
}

function UpdateTaskModal({
  isOpen,
  onClose,
  task
}: UpdateTaskModalProps): JSX.Element {
  const [taskContentUpdated, setTaskContentUpdated] = useState(task.content);

  const router = useRouter();

  async function handleUpadteTask(e: FormEvent) {
    e.preventDefault()
    
    await api.patch(`tasks/update/${task.id}`, {
      content: taskContentUpdated
    })

    onClose()
    router.reload();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button type="button" onClick={onClose} className="close-button">
        <XCircle />
      </button>

      <Form onSubmit={handleUpadteTask}>
        <h2>
          Update <span>a Task</span>
        </h2>

        <InputGroup>
          <label>Content</label>
          <Input
            type="text"
            onChange={e => setTaskContentUpdated(e.target.value)}
            value={taskContentUpdated}
          />
        </InputGroup>

        <Button type="submit">Update</Button>
      </Form>
    </Modal>
  )
}

export default UpdateTaskModal

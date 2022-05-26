import { useRouter } from 'next/router'
import { XCircle } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/apiClient'
import { Button } from '../Button'
import { Form, Input, InputGroup } from './styles'

interface CreateTaskModalProps {
  isOpen: boolean
  onClose: () => void
}

function CreateTaskModal({
  isOpen,
  onClose
}: CreateTaskModalProps): JSX.Element {
  const [content, setContent] = useState('');

  const router = useRouter();

  async function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()

    await api.post('tasks', {
      content
    })

    setContent('')
    onClose()
    router.reload()
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

      <Form onSubmit={handleCreateNewTask}>
        <h2>
          Create <span>a Task</span>
        </h2>

        <InputGroup>
          <label>Content</label>
          <Input
            type="text"
            onChange={e => setContent(e.target.value)}
            value={content}
          />
        </InputGroup>

        <Button type="submit">Create</Button>
      </Form>
    </Modal>
  )
}

export { CreateTaskModal }

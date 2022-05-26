import { useRouter } from 'next/router'
import React from 'react'
import Modal from 'react-modal'
import { api } from '../../services/apiClient'
import { Buttons, CancelButton, ConfirmButton, Container } from './styles'
interface DeleteTaskModalProps {
  isOpen: boolean
  onClose: () => void
  taskId: string
}

function DeleteTaskModal({
  isOpen,
  onClose,
  taskId
}: DeleteTaskModalProps): JSX.Element {
  const router = useRouter();

  async function handleDeleteTask(taskId: string) {
    await api.delete(`tasks/delete/${taskId}`)

    onClose();
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
      <Container>
        <h2>
          Are you sure you want to delete this <span>task?</span>
        </h2>

        <Buttons>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ConfirmButton onClick={() => handleDeleteTask(taskId)}>
            Yes, Confirm!
          </ConfirmButton>
        </Buttons>
      </Container>
    </Modal>
  )
}

export default DeleteTaskModal

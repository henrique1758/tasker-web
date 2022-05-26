import styled from 'styled-components'

export const AddTaskContainer = styled.div`
  margin-top: 2.5rem;

  max-width: 1024px;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeadingContainer = styled.div`
  margin-top: 3.6875rem;

  max-width: 1024px;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`
export const HelloMessage = styled.div`
  h3 {
    color: var(--gray-200);
    font-weight: 500;
    font-size: 1.5rem;

    span {
      color: var(--blue);
    }
  }
`
export const TasksMessage = styled.div`
  h3 {
    color: var(--gray-400);
    font-weight: 500;
    font-size: 1.5rem;

    span {
      color: var(--blue);
    }
  }
`

export const PlusButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;

  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s hover;

  &:hover {
    box-shadow: 0px 0px 9px 3px rgba(43, 236, 255, 0.25);
  }

  &:focus {
    border: 2px solid var(--gray-400);
  }
`

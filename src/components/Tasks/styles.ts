import styled from 'styled-components'

interface TaskProps {
  isChecked: boolean
}

export const Container = styled.ul`
  margin-top: 5rem;
  display: grid;
  gap: 1rem;

  max-width: 1024px;
  padding: 2rem;
  margin: 0 auto;
`

export const TaskContainer = styled.li`
  padding: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Content = styled.div<TaskProps>`
  label {
    margin-left: 0.625rem;
    color: ${props =>
      props.isChecked ? 'var(--gray-100)' : 'var(--gray-300)'};
    text-decoration: ${props => props.isChecked && 'line-through'};
  }
`
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`

export const TaskButton = styled.button`
  cursor: pointer;

  svg {
    font-size: 25px;
    color: var(--gray-200);
    transition: color 0.1s;
  }

  svg.pencil:hover {
    color: var(--blue);
  }

  svg.trash:hover {
    color: var(--red);
  }

  &:focus {
    border: 2px solid var(--gray-400);
  }
`

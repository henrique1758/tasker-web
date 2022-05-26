import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  padding: 2rem;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--gray-400);

    span {
      color: var(--blue);
    }
  }
`
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`
export const CancelButton = styled.button`
  width: 9.375rem;
  height: 3.75rem;
  border-radius: 0.625rem;
  background-color: var(--gray-100);
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  &:focus {
    border: 2px solid var(--gray-400);
  }
`
export const ConfirmButton = styled.button`
  width: 9.375rem;
  height: 3.75rem;
  border-radius: 0.625rem;
  background-color: var(--blue);
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.04);
  }

  &:focus {
    border: 2px solid var(--gray-400);
  }
`

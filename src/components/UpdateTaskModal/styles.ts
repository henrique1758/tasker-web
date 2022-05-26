import styled from 'styled-components'

export const Form = styled.form`
  h2 {
    text-align: center;
    color: var(--gray-400);

    span {
      color: var(--blue);
    }
  }
`
export const InputGroup = styled.div`
  margin-top: 3rem;
  margin-bottom: 1.9rem;

  display: grid;
  gap: 0.625rem;

  label {
    color: var(--gray-400);
  }
`
export const Input = styled.input`
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid var(--gray-200);
  outline: none;
  padding: 0 0.5rem;

  &:focus {
    border: 1px solid var(--blue);
  }
`

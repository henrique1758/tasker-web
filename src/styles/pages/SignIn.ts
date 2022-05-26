import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  padding: 2rem;
  margin: 0 auto;

  > img {
    display: block;
    max-width: 13.375rem;
    width: 100%;
    height: 11.125rem;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 36;
    font-weight: 500;
    color: var(--gray-400);
    margin-top: 2.175rem;
  }

  span {
    display: block;
    margin-top: 2rem;
    color: var(--gray-400);
    text-align: center;

    a {
      margin-left: 2px;
      font-weight: 600;
      color: var(--blue);
    }
  }
`
export const Form = styled.form`
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  gap: 1.875rem;

  width: 100%;
  max-width: 700px;
`
export const InputGroup = styled.div`
  display: grid;
  gap: 0.625rem;

  label {
    font-size: 1.125rem;
    color: var(--gray-400);
  }
`
export const Input = styled.input`
  outline: none;
  border: 1px solid var(--gray-200);
  border-radius: 0.25rem;
  padding: 0 0.5rem;

  height: 3rem;

  &:focus {
    border: 1px solid var(--blue);
  }
`

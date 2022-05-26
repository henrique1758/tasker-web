import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 3rem;

  background-color: var(--blue);
  border-radius: 0.25rem;
  color: var(--white);

  transition: filter 0.2s;

  font-size: 1rem;
  font-weight: 500;

  &:hover {
    filter: brightness(1.04);
  }

  &:focus {
    border: 2px solid var(--gray-400);
  }
`

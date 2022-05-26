import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.125rem;
`
export const AvatarContainer = styled.form`
  display: grid;
  gap: 3rem;

  > img {
    width: 15.625rem;
    height: 15.625rem;
    border-radius: 50%;
    object-fit: cover;
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

  h1 {
    color: var(--gray-400);

    span {
      color: var(--blue);
    }
  }
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
export const Buttons = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .avatar-field {
    display: none;
  }
`
export const UploadButton = styled.label`
  width: 150px;

  background-color: var(--blue);
  padding: 1rem;
  border-radius: 0.625rem;
  color: var(--white);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  transition: filter 0.2s;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 0.25rem;
  }

  &:hover {
    filter: brightness(1.04);
  }
`
export const SaveButton = styled.button`
  width: 150px;

  background-color: var(--blue);
  padding: 1rem;
  border-radius: 0.625rem;
  color: var(--white);
  cursor: pointer;

  font-size: 1rem;

  margin: 0 auto;

  &:hover {
    filter: brightness(1.04);
  }
`

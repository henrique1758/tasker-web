import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --blue: #47EDFD;
    --red: #FB5050;
    --white: #FFFFFF;
    --gray-100: #E5E5E5;
    --gray-200: #DCD9D9;
    --gray-300: #ACA9A9;
    --gray-400: #545454;
  }

  img {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    background: none;
    outline: none;
    border: 0;
    cursor: pointer;
  }

  .modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    width: 100%;
    max-width: 768px;

    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .close-button {
    color: var(--gray-200);
    position: absolute;
    right: 1rem;
    top: 1rem;

    > svg {
      font-size: 24px;
      transition: color 0.1s;

      &:hover {
        color: var(--blue);
      }
    }

    &:focus {
      border: 2px solid var(--gray-400);
    }
  }
`

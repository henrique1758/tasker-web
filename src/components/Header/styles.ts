import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 4.375rem;
`
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1024px;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
`
export const ProfileContainer = styled.div`
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
  }

  .user-icon {
    width: 40px;
    height: 40px;
  }

  position: relative;
`
export const ToggleMenu = styled.div`
  background-color: var(--white);
  padding: 1.25rem 1.4375rem;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 23px 6px rgba(71, 237, 253, 0.25);

  display: grid;
  align-items: center;

  width: 15rem;
  height: 10rem;

  position: absolute;
  top: 100%;
  left: -175%;
  z-index: 10;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: var(--blue);
  }

  a {
    color: var(--gray-400);
    font-size: 20px;
  }
`
export const SignOutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: var(--red);
  }

  span {
    color: var(--gray-400);
    font-size: 20px;
  }
`

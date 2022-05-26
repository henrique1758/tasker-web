/* eslint-disable camelcase */
import Link from 'next/link'
import { Power, UserCircle } from 'phosphor-react'
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {
  Container,
  Logo,
  Profile,
  ProfileContainer,
  SignOutButton,
  ToggleMenu,
  Wrapper
} from './styles'

function Header(): JSX.Element {
  const { user, signOut } = useAuth()

  const [isToggleMenuVisible, setIsToggleMenuVisible] = useState(false)

  function handleToggleMenu() {
    setIsToggleMenuVisible(!isToggleMenuVisible)
  }

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link href="/home">
            <a>
              <img className="logo" src="/logo.svg" alt="logo" />
            </a>
          </Link>
        </Logo>

        <ProfileContainer>
          {user.avatar_url ? (
            <img
              src={user.avatar_url}
              alt="user profile"
              onClick={handleToggleMenu}
            />
          ) : (
            <img
              src="/user.svg"
              alt="user profile"
              className="user-icon"
              onClick={handleToggleMenu}
            />
          )}

          {isToggleMenuVisible && (
            <ToggleMenu>
              <Profile>
                <UserCircle className="user-icon" />

                <Link href="/profile">
                  <a>My Profile</a>
                </Link>
              </Profile>

              <SignOutButton onClick={signOut}>
                <Power className="loggout-icon" />

                <span>Sign Out</span>
              </SignOutButton>
            </ToggleMenu>
          )}
        </ProfileContainer>
      </Wrapper>
    </Container>
  )
}

export { Header }

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { useAuth } from '../contexts/AuthContext'
import { api } from '../services/apiClient'
import {
  AvatarContainer,
  Buttons,
  Container,
  Form,
  Input,
  InputGroup,
  SaveButton,
  UploadButton
} from '../styles/pages/Profile'
import { withSSRAuth } from '../utils/withSSRAuth'

function profile(): JSX.Element {
  const { user } = useAuth();
  const router = useRouter();

  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPassword, setUserPassword] = useState('');
  const [avatarFile, setAvatarFile] = useState('');

  async function handleUpdateUserAvatar(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('avatar', avatarFile);
    
    await api.patch('users/update/avatar', formData);

    router.reload();
  }

  async function handleUpdateUserData(e: FormEvent) {
    e.preventDefault();

    await api.put('users/update', {
      name: userName,
      email: userEmail,
      password: userPassword
    })

    router.reload();
  }

  return (
    <>
      <Header />

      <Container>
        <AvatarContainer onSubmit={handleUpdateUserAvatar}>
          <img src={user.avatar_url} />

          <Buttons>
            <input 
              className="avatar-field" 
              type="file" 
              id="avatar" 
              onChange={e => setAvatarFile(e.target.files[0])} 
            />

            <UploadButton htmlFor="avatar">
              <img src="/gallery.svg" alt="upload image icon" />
              <span>{avatarFile ? `${avatarFile.name}`: "Select"}</span>
            </UploadButton>

            <SaveButton>Save</SaveButton>
          </Buttons>
        </AvatarContainer>

        <Form onSubmit={handleUpdateUserData}>
          <h1>
            My <span>Profile</span>
          </h1>

          <InputGroup>
            <label>Name</label>
            <Input 
              type="text" 
              value={userName} 
              onChange={e => setUserName(e.target.value)} 
            />
          </InputGroup>

          <InputGroup>
            <label>E-mail</label>
            <Input 
              type="email" 
              value={userEmail} 
              onChange={e => setUserEmail(e.target.value)} 
            />
          </InputGroup>

          <InputGroup>
            <label>Password</label>
            <Input 
              type="password" 
              value={userPassword} 
              onChange={e => setUserPassword(e.target.value)} 
            />
          </InputGroup>
          
          <Button type="submit">Update</Button>
        </Form>
      </Container>
    </>
  )
}

export default profile

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
})

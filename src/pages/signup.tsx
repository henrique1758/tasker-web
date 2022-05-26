import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { api } from '../services/apiClient'
import { Container, Form, Input, InputGroup } from '../styles/pages/SignIn'

function SignUp(): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  async function handleCreateNewUser(e: FormEvent) {
    e.preventDefault();

    await api.post('users', {
      name,
      email,
      password
    });

    router.push('/')
  }

  return (
    <Container>
      <img src="/logo.svg" alt="logo" />

      <h2>Create an account</h2>

      <Form onSubmit={handleCreateNewUser}>
        <InputGroup>
          <label>Name</label>
          <Input type="text" onChange={e => setName(e.target.value)} value={name} />
        </InputGroup>

        <InputGroup>
          <label>E-mail</label>
          <Input type="email" onChange={e => setEmail(e.target.value)} value={email} />
        </InputGroup>

        <InputGroup>
          <label>Password</label>
          <Input type="password" onChange={e => setPassword(e.target.value)} value={password} />
        </InputGroup>

        <Button type="submit">SignUp</Button>
      </Form>

      <span>
        Already have an account?
        <Link href="/">
          <a>SignIn Now!</a>
        </Link>
      </span>
    </Container>
  )
}

export default SignUp

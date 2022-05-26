import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import React, { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext'
import { Container, Form, Input, InputGroup } from '../styles/pages/SignIn'

function Login(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    await signIn({
      email,
      password
    })
  }

  return (
    <Container>
      <img src="/logo.svg" alt="logo" />

      <h2>Login to your account</h2>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <label>E-mail</label>
          <Input
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </InputGroup>

        <InputGroup>
          <label>Password</label>
          <Input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </InputGroup>

        <Button type="submit">SignIn</Button>
      </Form>

      <span>
        Don’t have an account?
        <Link href="/signup">
          <a>SignUp Now!</a>
        </Link>
      </span>
    </Container>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { '@tskr:cookie': token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

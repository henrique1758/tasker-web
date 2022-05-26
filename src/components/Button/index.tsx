import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function Button({ children }: ButtonComponentProps): JSX.Element {
  return <Container>{children}</Container>
}

export { Button }

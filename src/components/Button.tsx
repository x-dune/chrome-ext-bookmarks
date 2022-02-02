import { PropsWithChildren } from "react"
import styled from "styled-components"

interface ButtonProps {
  onClick?: VoidFunction
  title?: string
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <Container onClick={props.onClick} title={props.title}>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--size-3);
  border-radius: var(--radius-2);
  cursor: pointer;
  border: var(--border-size-2) solid transparent;
  transition: border-color 0.25s, background-color 0.25s;

  &:hover {
    border-color: var(--violet-7);
    background-color: hsl(var(--violet-7-hsl) / 30%);
  }
`

export default Button

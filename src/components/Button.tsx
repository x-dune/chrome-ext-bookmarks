import { PropsWithChildren } from "react"
import styled, { css } from "styled-components"

interface ButtonProps {
  title?: string
  onClick: VoidFunction
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <Container onClick={props.onClick} title={props.title}>
      {props.children}
    </Container>
  )
}

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--size-3);
  border-radius: var(--radius-2);
  cursor: pointer;
  border: var(--border-size-2) solid transparent;
  transition: border-color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;

  &:hover {
    border-color: var(--violet-7);
    background-color: hsl(var(--violet-7-hsl) / 30%);
  }
`

const Container = styled.div`
  ${buttonStyle}
`

export default Button

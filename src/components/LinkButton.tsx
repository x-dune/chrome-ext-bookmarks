import { PropsWithChildren } from "react"
import styled from "styled-components"
import { buttonStyle } from "./Button"

interface LinkButtonProps {
  title?: string
  href: string
}

const Button = (props: PropsWithChildren<LinkButtonProps>) => {
  return (
    <Link href={props.href} title={props.title}>
      {props.children}
    </Link>
  )
}

const Link = styled.a`
  ${buttonStyle}
  text-decoration: none;
  margin-inline: 0;
`

export default Button

import styled from "styled-components"
import { getFavicon } from "../bookmarkUtil"

interface BookmarkItemProps {
  item: chrome.bookmarks.BookmarkTreeNode
}

const BookmarkItem = (props: BookmarkItemProps) => {
  return (
    <Button onClick={() => window.open(props.item.url)} title={props.item.title}>
      <Image src={getFavicon(props.item)} alt="" />
      <Title>{props.item.title}</Title>
    </Button>
  )
}

const Button = styled.div`
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

const Image = styled.img`
  width: var(--font-size-1);
  height: var(--font-size-1);
`

const Title = styled.p`
  color: var(--text-1);
  font-size: var(--font-size-1);
  margin-left: var(--size-2);
  max-inline-size: initial;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default BookmarkItem

import styled from "styled-components"
import { getFavicon } from "../bookmarkUtil"

interface BookmarkItemProps {
  item: chrome.bookmarks.BookmarkTreeNode
}

const BookmarkItem = (props: BookmarkItemProps) => {
  return (
    <Button onClick={() => window.open(props.item.url)}>
      <Image src={getFavicon(props.item)} alt="" />
      <Title>{props.item.title}</Title>
    </Button>
  )
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--violet-9);
  margin-bottom: var(--size-2);
  cursor: pointer;
  transition: background-color 0.25s;
  border-radius: var(--size-2);

  &:hover {
    background-color: var(--violet-7);
  }
`

const Image = styled.img`
  width: var(--size-3);
  height: var(--size-3);
`

const Title = styled.p`
  color: var(--gray-0);
  font-size: var(--size-3);
  margin-left: var(--size-2);
`

export default BookmarkItem

import styled from "styled-components"
import { getFavicon } from "@/bookmark/bookmarkUtil"
import Button from "@/components/Button"

interface BookmarkItemProps {
  item: chrome.bookmarks.BookmarkTreeNode
}

const BookmarkItem = (props: BookmarkItemProps) => {
  return (
    <Button onClick={() => window.open(props.item.url, "_self")} title={props.item.title}>
      <Image src={getFavicon(props.item)} alt="" />
      <Title>{props.item.title}</Title>
    </Button>
  )
}

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

import styled from "styled-components"
import BookmarkItem from "@/bookmark/view/BookmarkItem"

interface BookmarkFolderProps {
  item: chrome.bookmarks.BookmarkTreeNode
}

const BookmarkFolder = (props: BookmarkFolderProps) => {
  const bookmarkChildren = props.item.children ?? []

  return (
    <Container>
      <FolderTitle>{props.item.title}</FolderTitle>
      {bookmarkChildren.map((item) => (
        <BookmarkItem key={item.id} item={item} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  min-width: 0;
`

const FolderTitle = styled.p`
  color: var(--text-accent-1);
  font-weight: var(--font-weight-7);
  font-size: var(--font-size-2);
  margin: 0 auto var(--size-2);
  text-align: center;
`

export default BookmarkFolder

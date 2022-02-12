import styled from "styled-components"
import { isBookmarkTreeNodeLeaf } from "../bookmarkUtil"
import BookmarkFolderTitleWithActions from "./BookmarkFolderTitleWithActions"
import BookmarkItem from "@/bookmark/view/BookmarkItem"

interface BookmarkFolderProps {
  item: chrome.bookmarks.BookmarkTreeNode
  index: number
}

const BookmarkFolder = (props: BookmarkFolderProps) => {
  const bookmarkChildren = props.item.children?.filter(isBookmarkTreeNodeLeaf) ?? []

  return (
    <Container>
      <BookmarkFolderTitleWithActions item={props.item} index={props.index} />
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

export default BookmarkFolder

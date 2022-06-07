import styled from "styled-components"
import { isBookmarkTreeNodeLeaf } from "../bookmarkUtil"
import BookmarkFolderTitleWithActions from "./BookmarkFolderTitleWithActions"
import BookmarkItem from "@/bookmark/view/BookmarkItem"
import { useDispatch, useSelector } from "react-redux"
import { draggedFolderIndexSelector } from "../bookmarkSelectors"
import { displayFolderIdsActions } from "../bookmarkSlice"

interface BookmarkFolderProps {
  item: chrome.bookmarks.BookmarkTreeNode
  index: number
}

const BookmarkFolder = (props: BookmarkFolderProps) => {
  const dispatch = useDispatch()

  const bookmarkChildren = props.item.children?.filter(isBookmarkTreeNodeLeaf) ?? []
  const draggedFolderIndex = useSelector(draggedFolderIndexSelector)

  return (
    <Container
      onDrop={() => {
        if (draggedFolderIndex !== null) {
          dispatch(displayFolderIdsActions.swapIndex([props.index, draggedFolderIndex]))
        }
      }}
      onDragOver={(e) => {
        e.preventDefault()
      }}
    >
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

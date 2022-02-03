import { useEffect } from "react"
import styled from "styled-components"
import { getBookmarkTree, getDisplayFolderIdsFromStorage } from "../bookmarkUtil"
import { displayBookmarkFolderSelector } from "@/bookmark/bookmarkSelectors"
import BookmarkFolder from "@/bookmark/view/BookmarkFolder"
import { useAppDispatch, useAppSelector } from "@/store/hook"

const BookmarkFolders = () => {
  const displayBookmarkFolder = useAppSelector(displayBookmarkFolderSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getBookmarkTree(dispatch)
    getDisplayFolderIdsFromStorage(dispatch)
  }, [])

  return (
    <Container>
      {displayBookmarkFolder.map((node) => (
        <BookmarkFolder key={node.id} item={node} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 0;
`

export default BookmarkFolders

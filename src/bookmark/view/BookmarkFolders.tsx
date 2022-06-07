import { useEffect } from "react"
import styled from "styled-components"
import { displayBookmarkFolderSelector } from "@/bookmark/bookmarkSelectors"
import bookmarkThunks from "@/bookmark/bookmarkThunks"
import BookmarkFolder from "@/bookmark/view/BookmarkFolder"
import { useAppDispatch, useAppSelector } from "@/store/hook"

const BookmarkFolders = () => {
  const displayBookmarkFolder = useAppSelector(displayBookmarkFolderSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(bookmarkThunks.startup())
  }, [])

  return (
    <Container>
      {displayBookmarkFolder.map((node, index) => (
        <BookmarkFolder item={node} index={index} key={index} />
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

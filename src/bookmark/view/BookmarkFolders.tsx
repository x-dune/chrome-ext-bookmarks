import { useEffect } from "react"
import styled from "styled-components"
import { dummyBookmarkTree } from "@/bookmark/bookmarkConstants"
import { displayBookmarkFolderSelector } from "@/bookmark/bookmarkSelectors"
import { bookmarkTreeActions } from "@/bookmark/bookmarkSlice"
import BookmarkFolder from "@/bookmark/view/BookmarkFolder"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { isLocalEnv } from "@/util"

const BookmarkFolders = () => {
  const displayBookmarkFolder = useAppSelector(displayBookmarkFolderSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isLocalEnv) {
      chrome.bookmarks.getTree((result) => {
        dispatch(bookmarkTreeActions.set(result))
      })
    } else {
      dispatch(bookmarkTreeActions.set(dummyBookmarkTree))
    }
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

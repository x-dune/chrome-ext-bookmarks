import { useEffect } from "react"
import styled from "styled-components"
import { dummyBookmarkTree } from "@/bookmark/bookmarkConstants"
import { bookmarkBarSelector } from "@/bookmark/bookmarkSelectors"
import { bookmarkTreeActions } from "@/bookmark/bookmarkSlice"
import BookmarkItem from "@/bookmark/view/BookmarkItem"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { isLocalEnv } from "@/util"

const BookmarkItems = () => {
  const { bookmarkBar, bookmark } = useAppSelector((state) => ({
    bookmarkBar: bookmarkBarSelector(state),
    bookmark: state.bookmark,
  }))
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

  console.log(">>>", bookmark)

  return (
    <Container>
      {bookmarkBar?.map((item) => (
        <BookmarkItem key={item.id} item={item} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
`

export default BookmarkItems

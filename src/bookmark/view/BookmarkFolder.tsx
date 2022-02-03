import IconButton from "@mui/material/IconButton"
import styled from "styled-components"
import { displayFolderIdsActions } from "../bookmarkSlice"
import BookmarkItem from "@/bookmark/view/BookmarkItem"
import { useAppDispatch } from "@/store/hook"

interface BookmarkFolderProps {
  item: chrome.bookmarks.BookmarkTreeNode
  index: number
}

const BookmarkFolder = (props: BookmarkFolderProps) => {
  const dispatch = useAppDispatch()
  // TODO: refactor this into selector
  const bookmarkChildren = props.item.children?.filter((item) => item.url) ?? []

  return (
    <Container>
      <FolderTitleContainer>
        <FolderTitle>{props.item.title}</FolderTitle>
        <ButtonContainer>
          <IconButton onClick={() => dispatch(displayFolderIdsActions.remove(props.index))}>
            <Icon className="bi-x-circle" />
          </IconButton>
        </ButtonContainer>
      </FolderTitleContainer>
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

const ButtonContainer = styled.div`
  max-width: 0px;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.25s, opacity 0.25s;
`

const FolderTitleContainer = styled.div`
  display: flex;
  height: 46px; /* height of IconButton */
  flex-direction: row;
  align-items: center;

  &:hover ${ButtonContainer} {
    max-width: var(--size-15);
    opacity: 1;
  }
`

const FolderTitle = styled.p`
  color: var(--text-accent-1);
  font-weight: var(--font-weight-7);
  font-size: var(--font-size-2);
  margin: 0 auto;
  text-align: center;
`

const Icon = styled.i`
  font-size: var(--font-size-3);
  color: var(--violet-5);
  align-self: flex-end;
`

export default BookmarkFolder

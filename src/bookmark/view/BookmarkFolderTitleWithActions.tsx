import IconButton from "@mui/material/IconButton"
import styled from "styled-components"
import { displayFolderIdsActions } from "@/bookmark/bookmarkSlice"
import bookmarkThunks from "@/bookmark/bookmarkThunks"
import { useAppDispatch } from "@/store/hook"

interface BookmarkFolderTitleWithActionsProps {
  item: chrome.bookmarks.BookmarkTreeNode
  index: number
}

const BookmarkFolderTitleWithActions = (props: BookmarkFolderTitleWithActionsProps) => {
  const dispatch = useAppDispatch()

  return (
    <Container>
      <FolderTitle>{props.item.title}</FolderTitle>
      <ButtonContainer>
        <IconButton onClick={() => dispatch(bookmarkThunks.showEditBookmarkFolderDialog(props.index, props.item.id))}>
          <Icon className="bi-pencil" />
        </IconButton>
        <IconButton onClick={() => dispatch(displayFolderIdsActions.remove(props.index))}>
          <Icon className="bi-x-circle" />
        </IconButton>
      </ButtonContainer>
    </Container>
  )
}

const ButtonContainer = styled.div`
  max-width: 0px;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.25s, opacity 0.25s;
`

const Container = styled.div`
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

export default BookmarkFolderTitleWithActions

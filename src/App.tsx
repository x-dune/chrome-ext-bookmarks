import IconButton from "@mui/material/IconButton"
import styled from "styled-components"
import ListSelectDialog from "./dialog/views/ListSelectDialog"
import { canAddDisplayFolderIdSelector } from "@/bookmark/bookmarkSelectors"
import bookmarkThunks from "@/bookmark/bookmarkThunks"
import BookmarkFolders from "@/bookmark/view/BookmarkFolders"
import { useAppDispatch, useAppSelector } from "@/store/hook"

function App() {
  const canAddDisplayFolderId = useAppSelector(canAddDisplayFolderIdSelector)
  const dispatch = useAppDispatch()

  return (
    <Container>
      <BookmarkFolders />
      {canAddDisplayFolderId ? (
        <ButtonContainer>
          <IconButton onClick={() => dispatch(bookmarkThunks.showAddBookmarkFolderDialog())}>
            <Icon className="bi-patch-plus-fill" />
          </IconButton>
        </ButtonContainer>
      ) : null}
      <ListSelectDialog />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: var(--size-2);
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Icon = styled.i`
  font-size: var(--font-size-5);
  color: var(--violet-5);
`

export default App

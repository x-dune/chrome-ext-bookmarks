import IconButton from "@mui/material/IconButton"
import { useState } from "react"
import styled from "styled-components"
import { canAddDisplayFolderIdSelector } from "@/bookmark/bookmarkSelectors"
import BookmarkFolderPickerDialog from "@/bookmark/view/BookmarkFolderPickerDialog"
import BookmarkFolders from "@/bookmark/view/BookmarkFolders"
import { useAppSelector } from "@/store/hook"

function App() {
  const canAddDisplayFolderId = useAppSelector(canAddDisplayFolderIdSelector)
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <BookmarkFolders />
      {canAddDisplayFolderId ? (
        <ButtonContainer>
          <IconButton onClick={() => setOpen(true)}>
            <Icon className="bi-patch-plus-fill" />
          </IconButton>
        </ButtonContainer>
      ) : null}
      <BookmarkFolderPickerDialog open={open} onClose={() => setOpen(false)} />
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

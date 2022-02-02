import "@/index.css"
import Button from "@mui/material/Button"
import { useState } from "react"
import styled from "styled-components"
import { canAddDisplayFolderIdSelector } from "@/bookmark/bookmarkSelectors"
import BookmarkFolderPickerDialog from "@/bookmark/view/BookmarkFolderPickerDialog"
import BookmarkFolders from "@/bookmark/view/BookmarkFolders"
import { useAppSelector } from "@/store/hook"

const Container = styled.div`
  display: flex;
  padding: var(--size-2);
`

function App() {
  const canAddDisplayFolderId = useAppSelector(canAddDisplayFolderIdSelector)
  const [open, setOpen] = useState(true)

  return (
    <Container>
      <BookmarkFolders />
      {canAddDisplayFolderId ? <Button onClick={() => setOpen(true)}>Add</Button> : null}
      <BookmarkFolderPickerDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  )
}

export default App

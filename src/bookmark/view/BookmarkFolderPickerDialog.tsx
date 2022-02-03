import Dialog from "@mui/material/Dialog"
import Paper from "@mui/material/Paper"
import styled from "styled-components"
import { bookmarkFoldersWithUrlChildrenSelector } from "@/bookmark/bookmarkSelectors"
import { displayFolderIdsActions } from "@/bookmark/bookmarkSlice"
import Button from "@/components/Button"
import { useAppDispatch, useAppSelector } from "@/store/hook"

interface BookmarkFolderPickerDialogProps {
  open: boolean
  onClose: VoidFunction
}

const BookmarkFolderPickerDialog = (props: BookmarkFolderPickerDialogProps) => {
  const bookmarkFolders = useAppSelector(bookmarkFoldersWithUrlChildrenSelector)
  const dispatch = useAppDispatch()

  return (
    <Dialog open={props.open} PaperComponent={StyledPaper} onClose={props.onClose}>
      <Title>Add bookmark folder</Title>
      {bookmarkFolders.map((item) => (
        <Button
          key={item.id}
          onClick={() => {
            dispatch(displayFolderIdsActions.add(item.id))
            props.onClose()
          }}
        >
          <BookmarkFolderTitle>{item.title}</BookmarkFolderTitle>
        </Button>
      ))}
    </Dialog>
  )
}

const StyledPaper = styled(Paper)`
  background-color: var(--surface-1);
  padding: var(--size-2);
`

const Title = styled.p`
  color: var(--text-accent-1);
  font-weight: var(--font-weight-7);
  font-size: var(--font-size-2);
  margin: var(--size-2);
  text-align: center;
`

const BookmarkFolderTitle = styled.p`
  color: var(--text-1);
  font-size: var(--font-size-1);
`

export default BookmarkFolderPickerDialog

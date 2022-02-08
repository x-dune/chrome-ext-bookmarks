import Dialog from "@mui/material/Dialog"
import Paper from "@mui/material/Paper"
import styled from "styled-components"
import { dialogConfigSelector, shouldShowDialogSelector } from "../dialogSelectors"
import { dialogConfigActions } from "../dialogSlice"
import Button from "@/components/Button"
import { useAppDispatch, useAppSelector } from "@/store/hook"

const ListSelectDialog = () => {
  const { shouldShowDialog, dialogConfig } = useAppSelector((state) => ({
    shouldShowDialog: shouldShowDialogSelector(state),
    dialogConfig: dialogConfigSelector(state),
  }))
  const dispatch = useAppDispatch()

  const hideDialog = () => dispatch(dialogConfigActions.hideDialog())

  return (
    <Dialog open={shouldShowDialog} PaperComponent={StyledPaper} onClose={hideDialog}>
      {dialogConfig ? (
        <>
          <Title>{dialogConfig.title}</Title>
          {dialogConfig.items.map((item) => (
            <Button
              key={item.id}
              onClick={() => {
                dialogConfig.onSelect(item)
                hideDialog()
              }}
            >
              <BookmarkFolderTitle>{item.title}</BookmarkFolderTitle>
            </Button>
          ))}
        </>
      ) : null}
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

export default ListSelectDialog

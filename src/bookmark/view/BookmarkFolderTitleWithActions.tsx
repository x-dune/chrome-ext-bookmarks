import IconButton from "@mui/material/IconButton"
import styled from "styled-components"
import { displayFolderIdsActions, draggedFolderIndexActions } from "@/bookmark/bookmarkSlice"
import bookmarkThunks from "@/bookmark/bookmarkThunks"
import { useAppDispatch } from "@/store/hook"
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material"
import { useReducer, useRef } from "react"

interface BookmarkFolderTitleWithActionsProps {
  item: chrome.bookmarks.BookmarkTreeNode
  index: number
}

const BookmarkFolderTitleWithActions = (props: BookmarkFolderTitleWithActionsProps) => {
  const dispatch = useAppDispatch()
  const [isMenuOpen, toggleIsMenuOpen] = useReducer((state) => !state, false)
  const menuAnchorEl = useRef(null)

  const renderMenu = () => {
    return (
      <Menu open={true} anchorEl={menuAnchorEl.current} onClose={() => toggleIsMenuOpen()}>
        <MenuItem
          onClick={() => {
            dispatch(bookmarkThunks.showEditBookmarkFolderDialog(props.index, props.item.id))
            toggleIsMenuOpen()
          }}
        >
          <ListItemIcon>
            <Icon className="bi-pencil" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(displayFolderIdsActions.remove(props.index))
            toggleIsMenuOpen()
          }}
        >
          <ListItemIcon>
            <Icon className="bi-x-circle" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    )
  }

  return (
    <Container
      onDragStart={() => {
        dispatch(draggedFolderIndexActions.setIndex(props.index))
      }}
      onDragEnd={() => {
        dispatch(draggedFolderIndexActions.unset())
      }}
      draggable
    >
      <FolderTitle>{props.item.title}</FolderTitle>
      <ThreeDotsIconButton
        onClick={() => toggleIsMenuOpen()}
        ref={menuAnchorEl}
        style={{ opacity: isMenuOpen ? 1 : undefined }}
      >
        <Icon className="bi-three-dots-vertical" />
      </ThreeDotsIconButton>
      {isMenuOpen && menuAnchorEl.current ? renderMenu() : null}
    </Container>
  )
}

const ThreeDotsIconButton = styled(IconButton)`
  opacity: 0;
  transition: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
`

const Container = styled.div`
  display: flex;
  height: 46px; /* height of IconButton */
  flex-direction: row;
  align-items: center;

  &:hover ${ThreeDotsIconButton} {
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

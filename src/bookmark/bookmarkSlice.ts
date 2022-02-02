import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit"
import { BookmarkState } from "@/bookmark/types"

const initialState: BookmarkState = {
  bookmarkTree: [],
  displayFolderIds: ["1"],
}

const bookmarkTree = createSlice({
  name: "bookmark/bookmarkTree",
  initialState: initialState.bookmarkTree,
  reducers: {
    set(_, action: PayloadAction<chrome.bookmarks.BookmarkTreeNode[]>) {
      return action.payload
    },
  },
})

export const bookmarkTreeActions = bookmarkTree.actions

const displayFolderIds = createSlice({
  name: "bookmark/displayFolderIds",
  initialState: initialState.displayFolderIds,
  reducers: {
    set(_, action: PayloadAction<Array<string>>) {
      return action.payload
    },
    add(state, action: PayloadAction<string>) {
      return state.concat(action.payload)
    },
    //edit
  },
})

export const displayFolderIdsActions = displayFolderIds.actions

const bookmark = combineReducers<BookmarkState>({
  bookmarkTree: bookmarkTree.reducer,
  displayFolderIds: displayFolderIds.reducer,
})

export default bookmark

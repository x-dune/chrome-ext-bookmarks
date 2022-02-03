import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit"
import { setDisplayFolderIdsInStorage } from "./bookmarkUtil"
import { MAX_DISPLAY_FOLDER_IDS } from "@/bookmark/bookmarkConstants"
import { BookmarkState } from "@/bookmark/types"

const initialState: BookmarkState = {
  bookmarkTree: [],
  displayFolderIds: [],
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
    setDefault() {
      // default to showing Bookmarks Bar
      return ["1"]
    },
    add(state, action: PayloadAction<string>) {
      if (state.length < MAX_DISPLAY_FOLDER_IDS) {
        const nextState = state.concat(action.payload)
        setDisplayFolderIdsInStorage(nextState)
        return nextState
      } else {
        return state
      }
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

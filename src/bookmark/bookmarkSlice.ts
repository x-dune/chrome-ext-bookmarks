import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit"
import { setDisplayFolderIdsInStorage } from "./bookmarkUtil"
import { MAX_DISPLAY_FOLDER_IDS } from "@/bookmark/bookmarkConstants"
import { BookmarkState, EditDisplayFolderIds } from "@/bookmark/types"

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
    remove(state, action: PayloadAction<number>) {
      const nextState = state.slice(0, action.payload).concat(state.slice(action.payload + 1))
      setDisplayFolderIdsInStorage(nextState)
      return nextState
    },
    edit(state, action: PayloadAction<EditDisplayFolderIds>) {
      if (state[action.payload.index] && action.payload.item.children?.some((x) => x.url)) {
        const nextState = [...state]
        nextState[action.payload.index] = action.payload.item.id
        setDisplayFolderIdsInStorage(nextState)
        return nextState
      } else {
        return state
      }
    },
  },
})

export const displayFolderIdsActions = displayFolderIds.actions

const bookmark = combineReducers<BookmarkState>({
  bookmarkTree: bookmarkTree.reducer,
  displayFolderIds: displayFolderIds.reducer,
})

export default bookmark

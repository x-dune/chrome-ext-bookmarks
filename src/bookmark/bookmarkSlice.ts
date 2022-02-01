import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit"
import { BookmarkState } from "@/bookmark/types"

const sliceName = "bookmark"

const initialState: BookmarkState = {
  bookmarkTree: [],
}

const bookmarkTree = createSlice({
  name: sliceName,
  initialState: initialState.bookmarkTree,
  reducers: {
    set(_, action: PayloadAction<chrome.bookmarks.BookmarkTreeNode[]>) {
      return action.payload
    },
  },
})

export const bookmarkTreeActions = bookmarkTree.actions

const bookmark = combineReducers<BookmarkState>({
  bookmarkTree: bookmarkTree.reducer,
})

export default bookmark

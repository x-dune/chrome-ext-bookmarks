import { createSelector } from "@reduxjs/toolkit"
import { bookmarkTreeNodeBfs } from "./bookmarkUtil"
import type { RootState } from "@/store"

const bookmarkSelector = (state: RootState) => state.bookmark
const bookmarkTreeSelector = createSelector(bookmarkSelector, (bookmark) => bookmark.bookmarkTree)
const displayFolderIdsSelector = createSelector(bookmarkSelector, (bookmark) => bookmark.displayFolderIds)

export const bookmarkBarSelector = createSelector(
  bookmarkTreeSelector,
  (bookmarkTree) => bookmarkTree?.[0]?.children?.[0]?.children ?? [],
)

export const displayBookmarkFolderSelector = createSelector(
  bookmarkTreeSelector,
  displayFolderIdsSelector,
  (bookmarkTree, folderIds) =>
    folderIds.flatMap((id) => {
      const found = bookmarkTreeNodeBfs(bookmarkTree, id)
      return found ? [found] : []
    }),
)

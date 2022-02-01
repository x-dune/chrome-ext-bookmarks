import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "@/store"

const bookmarkSelector = (state: RootState) => state.bookmark
export const bookmarkTreeSelector = createSelector(bookmarkSelector, (bookmark) => bookmark.bookmarkTree)

export const bookmarkBarSelector = createSelector(
  bookmarkTreeSelector,
  (bookmarkTree) => bookmarkTree?.[0]?.children?.[0]?.children ?? [],
)

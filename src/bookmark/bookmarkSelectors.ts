import { createSelector } from "@reduxjs/toolkit"
import { MAX_DISPLAY_FOLDER_IDS } from "@/bookmark/bookmarkConstants"
import { bookmarkTreeNodeFindAll } from "@/bookmark/bookmarkUtil"
import type { RootState } from "@/store"

const bookmarkSelector = (state: RootState) => state.bookmark
const bookmarkTreeSelector = createSelector(bookmarkSelector, (bookmark) => bookmark.bookmarkTree)
const displayFolderIdsSelector = createSelector(bookmarkSelector, (bookmark) => bookmark.displayFolderIds)

export const bookmarkBarSelector = createSelector(
  bookmarkTreeSelector,
  (bookmarkTree) => bookmarkTree?.[0]?.children?.[0]?.children ?? [],
)

const bookmarkFoldersSelector = createSelector(bookmarkTreeSelector, (bookmarkTree) =>
  bookmarkTreeNodeFindAll(bookmarkTree, (item) => Boolean(item.children && item.children.length > 0)),
)

export const displayBookmarkFolderSelector = createSelector(
  bookmarkFoldersSelector,
  displayFolderIdsSelector,
  (bookmarkFolders, folderIds) =>
    folderIds.flatMap((id) => {
      const found = bookmarkFolders.find((item) => item.id === id)
      if (found && found.children?.some((item) => item.url && item.title)) {
        return [found]
      } else {
        return []
      }
    }),
)

export const bookmarkFoldersWithUrlChildrenSelector = createSelector(bookmarkFoldersSelector, (bookmarkFolders) =>
  bookmarkFolders.filter((item) => item.children?.some((x) => x.url)),
)

export const canAddDisplayFolderIdSelector = createSelector(displayFolderIdsSelector, (folderIds) => {
  // TODO: fix bug cos folderIds don't know which will get displayed due to the filtering, so theres 4 folderIds, but only 3 shown due to .url filtering
  return folderIds.length <= MAX_DISPLAY_FOLDER_IDS - 1
})

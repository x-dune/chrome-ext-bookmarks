import { dummyBookmarkTree } from "@/bookmark/bookmarkConstants"
import { bookmarkFoldersWithUrlChildrenSelector } from "@/bookmark/bookmarkSelectors"
import { bookmarkTreeActions, displayFolderIdsActions } from "@/bookmark/bookmarkSlice"
import { getDisplayFolderIdsFromStorage } from "@/bookmark/bookmarkUtil"
import { BookmarkTreeNode } from "@/bookmark/types"
import { dialogConfigActions } from "@/dialog/dialogSlice"
import { AppThunk } from "@/store"
import { isLocalEnv } from "@/util"

const bookmarkThunks = {
  showAddBookmarkFolderDialog: (): AppThunk => async (dispatch, getState) => {
    const bookmarkFoldersWithUrlChildren = bookmarkFoldersWithUrlChildrenSelector(getState())

    dispatch(
      dialogConfigActions.showDialog({
        title: "Add bookmark folder",
        items: bookmarkFoldersWithUrlChildren,
        onSelect: (item) => dispatch(displayFolderIdsActions.add(item.id)),
      }),
    )
  },

  showEditBookmarkFolderDialog:
    (index: number, id: string): AppThunk =>
    async (dispatch, getState) => {
      const otherBookmarkFoldersWithUrlChildren = bookmarkFoldersWithUrlChildrenSelector(getState()).filter(
        (item) => item.id !== id,
      )

      dispatch(
        dialogConfigActions.showDialog({
          title: "Add bookmark folder",
          items: otherBookmarkFoldersWithUrlChildren,
          onSelect: (item) => dispatch(displayFolderIdsActions.edit({ index, item })),
        }),
      )
    },

  getDisplayFolderIdsFromStorage: (): AppThunk => async (dispatch) => {
    const result = await getDisplayFolderIdsFromStorage()

    if (result) {
      dispatch(displayFolderIdsActions.set(result))
    } else {
      dispatch(displayFolderIdsActions.setDefault())
    }
  },

  getBookmarkTree: (): AppThunk => async (dispatch) => {
    if (isLocalEnv) {
      dispatch(bookmarkTreeActions.set(dummyBookmarkTree))
    } else {
      const bookmarkTree = await new Promise<BookmarkTreeNode[]>((resolve) =>
        chrome.bookmarks.getTree((result) => resolve(result)),
      )
      dispatch(bookmarkTreeActions.set(bookmarkTree))
    }
  },
}

export default bookmarkThunks

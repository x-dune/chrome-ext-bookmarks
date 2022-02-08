import { bookmarkFoldersWithUrlChildrenSelector } from "./bookmarkSelectors"
import { displayFolderIdsActions } from "./bookmarkSlice"
import { dialogConfigActions } from "@/dialog/dialogSlice"
import { AppThunk } from "@/store"

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
}

export default bookmarkThunks

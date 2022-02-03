import reactLogo from "@/assets/react.svg"
import viteLogo from "@/assets/vite.svg"
import { STORAGE_KEY, dummyBookmarkTree } from "@/bookmark/bookmarkConstants"
import { bookmarkTreeActions, displayFolderIdsActions } from "@/bookmark/bookmarkSlice"
import { AppDispatch } from "@/store"
import { isLocalEnv } from "@/util"

function getDummyFavicon(bookmarkNode: chrome.bookmarks.BookmarkTreeNode) {
  // deterministicly assign a dummy logo
  return (bookmarkNode.title?.[0] ?? "a").charCodeAt(0) % 2 === 0 ? viteLogo : reactLogo
}

export function getFavicon(bookmarkNode: chrome.bookmarks.BookmarkTreeNode) {
  return !isLocalEnv ? `chrome://favicon/${bookmarkNode.url}` : getDummyFavicon(bookmarkNode)
}

export function bookmarkTreeNodeFindAll(
  tree: chrome.bookmarks.BookmarkTreeNode[],
  predicate: (item: chrome.bookmarks.BookmarkTreeNode) => boolean,
) {
  const q = [...tree]
  const found = []
  while (q.length > 0) {
    const current = q.shift()
    if (current) {
      if (predicate(current)) {
        found.push(current)
      }

      current.children && q.push(...current.children)
    }
  }
  return found
}

export function getBookmarkTree(dispatch: AppDispatch) {
  if (isLocalEnv) {
    dispatch(bookmarkTreeActions.set(dummyBookmarkTree))
  } else {
    chrome.bookmarks.getTree((result) => {
      dispatch(bookmarkTreeActions.set(result))
    })
  }
}

export function getDisplayFolderIdsFromStorage(dispatch: AppDispatch) {
  if (isLocalEnv) {
    const result = window.localStorage.getItem(STORAGE_KEY)
    if (result) {
      dispatch(displayFolderIdsActions.set(JSON.parse(result)))
    } else {
      dispatch(displayFolderIdsActions.setDefault())
    }
  } else {
    chrome.storage.local.get(STORAGE_KEY, (result) => {
      if (result[STORAGE_KEY]) {
        dispatch(displayFolderIdsActions.set(result[STORAGE_KEY]))
      } else {
        dispatch(displayFolderIdsActions.setDefault())
      }
    })
  }
}

export function setDisplayFolderIdsInStorage(displayFolderIds: string[]) {
  if (isLocalEnv) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(displayFolderIds))
  } else {
    chrome.storage.local.set({ [STORAGE_KEY]: displayFolderIds })
  }
}

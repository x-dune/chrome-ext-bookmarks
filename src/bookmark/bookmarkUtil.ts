import reactLogo from "@/assets/react.svg"
import viteLogo from "@/assets/vite.svg"
import { STORAGE_KEY } from "@/bookmark/bookmarkConstants"
import { BookmarkTreeNode, BookmarkTreeNodeLeaf } from "@/bookmark/types"
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

export async function getDisplayFolderIdsFromStorage() {
  if (isLocalEnv) {
    const foledrIds = window.localStorage.getItem(STORAGE_KEY)
    return foledrIds ? (JSON.parse(foledrIds) as string[]) : null
  } else {
    const folderIds = await new Promise<string[] | null>((resolve) =>
      chrome.storage.local.get(STORAGE_KEY, (result) => resolve(result[STORAGE_KEY] ?? null)),
    )

    return folderIds
  }
}

export function setDisplayFolderIdsInStorage(displayFolderIds: string[]) {
  if (isLocalEnv) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(displayFolderIds))
  } else {
    chrome.storage.local.set({ [STORAGE_KEY]: displayFolderIds })
  }
}

export function isBookmarkTreeNodeLeaf(item: BookmarkTreeNode | BookmarkTreeNodeLeaf): item is BookmarkTreeNodeLeaf {
  return Boolean(item.url && item.title)
}

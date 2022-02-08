export interface BookmarkState {
  bookmarkTree: chrome.bookmarks.BookmarkTreeNode[]
  displayFolderIds: string[]
}

export interface EditDisplayFolderIds {
  index: number
  item: chrome.bookmarks.BookmarkTreeNode
}

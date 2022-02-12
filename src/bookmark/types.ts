export type BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode

export type BookmarkTreeNodeLeaf = BookmarkTreeNode & Required<Pick<BookmarkTreeNode, "url" | "title">>

export interface BookmarkState {
  bookmarkTree: chrome.bookmarks.BookmarkTreeNode[]
  displayFolderIds: string[]
}

export interface EditDisplayFolderIds {
  index: number
  item: chrome.bookmarks.BookmarkTreeNode
}

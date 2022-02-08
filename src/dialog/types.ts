export interface State {
  dialogConfig: DialogConfig | null
}

export interface DialogConfig {
  title: string
  items: chrome.bookmarks.BookmarkTreeNode[]
  onSelect: (item: chrome.bookmarks.BookmarkTreeNode) => void
}

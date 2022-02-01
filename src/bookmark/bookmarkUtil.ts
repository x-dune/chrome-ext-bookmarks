import reactLogo from "@/assets/react.svg"
import viteLogo from "@/assets/vite.svg"
import { isLocalEnv } from "@/util"

function getDummyFavicon(bookmarkNode: chrome.bookmarks.BookmarkTreeNode) {
  // deterministicly assign a dummy logo
  return (bookmarkNode.title?.[0] ?? "a").charCodeAt(0) % 2 === 0 ? viteLogo : reactLogo
}

export function getFavicon(bookmarkNode: chrome.bookmarks.BookmarkTreeNode) {
  return !isLocalEnv ? `chrome://favicon/${bookmarkNode.url}` : getDummyFavicon(bookmarkNode)
}

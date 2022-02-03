export const MAX_DISPLAY_FOLDER_IDS = 4

export const dummyBookmarkTree: chrome.bookmarks.BookmarkTreeNode[] = [
  {
    children: [
      {
        children: [
          {
            dateAdded: 1528631380335,
            id: "111",
            index: 0,
            parentId: "1",
            title: "YouTube",
            url: "https://www.youtube.com/",
          },
          {
            dateAdded: 1535779912889,
            id: "112",
            index: 1,
            parentId: "1",
            title: "Google",
            url: "https://google.com",
          },
          {
            dateAdded: 1610377982762,
            id: "115",
            index: 2,
            parentId: "1",
            title: "GitHub",
            url: "https://github.com/",
          },
          {
            dateAdded: 1613120888851,
            id: "117",
            index: 3,
            parentId: "1",
            title: "Reddit - Dive into Anything",
            url: "https://www.reddit.com/",
          },
          {
            dateAdded: 1567791103979,
            id: "118",
            index: 4,
            parentId: "1",
            title: "MDN Web Docs",
            url: "https://developer.mozilla.org/en-US/",
          },
          {
            dateAdded: 1613401026012,
            id: "119",
            index: 5,
            parentId: "1",
            title: "Hacker News",
            url: "https://news.ycombinator.com/",
          },
        ],
        dateAdded: 1622215528483,
        dateGroupModified: 1637599909495,
        id: "1",
        index: 0,
        parentId: "0",
        title: "Bookmarks bar",
      },
      {
        children: [
          {
            children: [
              {
                dateAdded: 1602670417961,
                id: "6",
                index: 0,
                parentId: "5",
                title: "Wikipedia",
                url: "https://www.wikipedia.org/",
              },
              {
                dateAdded: 1605616955587,
                id: "9",
                index: 1,
                parentId: "5",
                title: "Wikipedia, the free encyclopedia",
                url: "https://en.wikipedia.org/wiki/Main_Page",
              },
            ],
            dateAdded: 1622215541158,
            dateGroupModified: 1635937594114,
            id: "5",
            index: 0,
            parentId: "2",
            title: "Stuff",
          },
          {
            children: [
              {
                dateAdded: 1602423576009,
                id: "81",
                index: 0,
                parentId: "80",
                title: "Rust Programming Language",
                url: "https://www.rust-lang.org/",
              },
              {
                dateAdded: 1609521542757,
                id: "85",
                index: 1,
                parentId: "80",
                title: "Install Rust - Rust Programming Language",
                url: "https://www.rust-lang.org/tools/install",
              },
            ],
            dateAdded: 1622215541168,
            dateGroupModified: 1636292959468,
            id: "80",
            index: 1,
            parentId: "2",
            title: "Rust Stuff",
          },
          {
            dateAdded: 1615652083814,
            id: "110",
            index: 2,
            parentId: "2",
            title: "Haskell Language",
            url: "https://www.haskell.org/",
          },
        ],
        dateAdded: 1622215528483,
        dateGroupModified: 1636271138139,
        id: "2",
        index: 1,
        parentId: "0",
        title: "Other bookmarks",
      },
    ],
    dateAdded: 1637646954591,
    id: "0",
    title: "",
  },
]

export const STORAGE_KEY = "displayFolderIds"

import "@/index.css"
import styled from "styled-components"
import BookmarkFolders from "@/bookmark/view/BookmarkFolders"

const Container = styled.div`
  display: flex;
  padding: var(--size-2);
`

function App() {
  return (
    <Container>
      <BookmarkFolders />
    </Container>
  )
}

export default App

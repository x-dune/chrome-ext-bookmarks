import "@/index.css"
import styled from "styled-components"
import BookmarkItems from "@/bookmark/view/BookmarkItems"

const Container = styled.div`
  padding: var(--size-2);
`

function App() {
  return (
    <Container>
      <BookmarkItems />
    </Container>
  )
}

export default App

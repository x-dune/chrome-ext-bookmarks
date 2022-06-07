import styled from "styled-components"
import { getFavicon } from "@/bookmark/bookmarkUtil"
import { BookmarkTreeNodeLeaf } from "@/bookmark/types"
import { buttonStyle } from "@/components/Button"
import bookmarkThunks from "../bookmarkThunks"
import { useDispatch } from "react-redux"

interface BookmarkItemProps {
  item: BookmarkTreeNodeLeaf
}

const BookmarkItem = (props: BookmarkItemProps) => {
  const dispatch = useDispatch()

  return (
    <StyledLinkButton
      onClick={(e) => {
        switch (e.nativeEvent.button) {
          case 0: // Left click
            if (e.ctrlKey && e.altKey) {
              dispatch(bookmarkThunks.removeBookmark(props.item.id))
            } else {
              location.assign(props.item.url)
            }
            break
          case 1: // Middle click
            window.open(props.item.url, "_blank")?.focus()
            break
        }
      }}
      title={props.item.title}
    >
      <TitleContainer>
        <Image src={getFavicon(props.item)} alt="" />
        <Title>{props.item.title}</Title>
      </TitleContainer>
      <ThreeDotsButton
        onClick={(e) => {
          e.stopPropagation()
          dispatch(bookmarkThunks.removeBookmark(props.item.id))
        }}
      >
        <Icon className="bi-x-circle" />
      </ThreeDotsButton>
    </StyledLinkButton>
  )
}

const ThreeDotsButton = styled.div`
  padding: 0 var(--size-2);
  cursor: pointer;
  opacity: 0;
  transition: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
`

const StyledLinkButton = styled.a`
  ${buttonStyle}
  text-decoration: none;

  &:hover ${ThreeDotsButton} {
    opacity: 1;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 100%;
`

const Image = styled.img`
  width: var(--font-size-1);
  height: var(--font-size-1);
`

const Title = styled.p`
  color: var(--text-1);
  font-size: var(--font-size-1);
  margin-left: var(--size-2);
  max-inline-size: initial;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Icon = styled.i`
  font-size: var(--font-size-1);
  color: var(--violet-5);
  align-self: flex-end;
`

export default BookmarkItem

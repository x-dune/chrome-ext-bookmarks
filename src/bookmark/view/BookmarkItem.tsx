import styled from "styled-components"
import { getFavicon } from "@/bookmark/bookmarkUtil"
import { BookmarkTreeNodeLeaf } from "@/bookmark/types"
import LinkButton from "@/components/LinkButton"

interface BookmarkItemProps {
  item: BookmarkTreeNodeLeaf
}

const BookmarkItem = (props: BookmarkItemProps) => {
  return (
    <LinkButton href={props.item.url} title={props.item.title}>
      <Image src={getFavicon(props.item)} alt="" />
      <Title>{props.item.title}</Title>
    </LinkButton>
  )
}

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

export default BookmarkItem

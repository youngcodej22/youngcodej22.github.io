import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

// index.tsx에서 사용하기위해 export 사용
// export type PostType = {
//   node: {
//     id: string
//     frontmatter: {
//       title: string
//       summary: string
//       date: string
//       categories: string[]
//       thumbnail: {
//         publicURL: string
//       }
//     }
//   }
// }

// 여기에서만 사용해서 export 안붙임
// type PostListProps = {
//   posts: PostType[]
// }

// 기존에 정의했던 PostListItemType 삭제

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

// dummy 데이터
// const POST_ITEM_DATA = {
//   title: 'Post Item Title',
//   date: '2020.01.29.',
//   categories: ['Web', 'Frontend', 'Testing'],
//   summary:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
//   thumbnail: 'https://picsum.photos/seed/picsum/200',
//   link: 'https://picsum.photos/',
// }

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
//! 파싱한 category 값을 통해 postitem만 띄워주기
const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  // 이렇게 useRef를 통해 특정 요소에 연결하면, containerRef.current 프로퍼티를 통해 ref로 연결된 요소에 접근이 가능합니다.
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  // const postListData = useMemo(
  //   () =>
  //     posts.filter(
  //       ({
  //         node: {
  //           frontmatter: { categories },
  //         },
  //       }: PostListItemType) =>
  //         selectedCategory !== 'All'
  //           ? categories.includes(selectedCategory)
  //           : true,
  //     ),
  //   [selectedCategory],
  // )

  return (
    // <PostListWrapper>
    //   {postListData.map(({ node: { id, frontmatter } }: PostListItemType) => (
    //     <PostItem {...frontmatter} link="http://www.google.co.kr/" key={id} />
    //   ))}
    // </PostListWrapper>

    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList

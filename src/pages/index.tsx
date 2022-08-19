import React, { FunctionComponent, useMemo } from 'react'
import {
  graphql,
  // HeadFC
} from 'gatsby'
// import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import queryString, { ParsedQuery } from 'query-string'
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList'
// import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import { PostListItemType } from 'types/PostItem.types'
import Template from 'components/Common/Template'
// import { SEO } from '../components/Common/Seo'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      // PostList.tsx에 type
      // edges: PostType[]
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

// ! 임의 data
// const CATEGORY_LIST = {
//   All: 5,
//   Web: 3,
//   Mobile: 2,
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
// `

// ! 아래 query를 통해 받은 데이터는 data라는 이름의 Props에 담겨있다.
// ! edges는 data가 배열로 들어있다
// FunctionComponent<>로 type지정
// edges를 posts라는 props로 보내주기

// (?category=Web) query를 props로 받기위해 query-string npm 설치후
const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  // , category 프로퍼티 값이 문자열 형태가 아니거나 존재하지 않는 경우에는 기본적으로 카테고리 값을 All로 지정하고, 그러지 않은 경우에는 파싱한 값을 지정해주었습니다.
  // 따라서 Query 부분에 카테고리 값이 존재하지 않거나, 타입이 맞지 않는 경우에는 모든 게시글을 조회하도록 의도하여 구현했습니다
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  // category List를 만드는 함수
  //! category 목록은 처음 생성 후 바뀌지 않아서 useMemo를 사용
  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
      profileImage={gatsbyImageData}
    >
      {/* <Introduction profileImage={gatsbyImageData} /> */}
      {/* <SideNavigation profileImage={gatsbyImageData} /> */}
      {/* <CategoryList selectedCategory={selectedCategory} categoryList={CATEGORY_LIST} /> */}
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  )
}

export default IndexPage

// 나중에 Gatsby Head api로 migration 필요
// export const Head: HeadFC<IndexPageProps> = () => <SEO />

// ! gatsby는 내부적으로 query를 export시 props로 전달해준다.
// file부분 lazy-loading 적용
export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 80, height: 80)
      }
      publicURL
    }
  }
`

import React, { FunctionComponent } from 'react'
import {
  graphql,
  // HeadFC
} from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
// import { SEO } from '../components/Common/Seo'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

// TS: props가 많으면 type을 따로 정의, 여기서는 리터럴로 지정
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
    </div>
  )
}

export default InfoPage

// export const Head: HeadFC<InfoPageProps> = props => (
//   <SEO title={props.data}>
//     <link
//       id="favicon-icon"
//       rel="icon"
//       href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🔥</text></svg>"
//     />
//   </SEO>
// )

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

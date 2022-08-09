import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
// import { HeadFC } from 'gatsby'
// import { SEO } from '../Common/Seo'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@youngcodej22" />
        <meta name="twitter:creator" content="@youngcodej22" />

        <meta property="fb:app_id" content="Application ID" />
        <meta property="fb:admins" content="Facebook numeric ID" />

        <meta
          name="google-site-verification"
          content="웹 마스터 도구가 제공하는 Meta 태그"
        />

        <html lang="ko" />
        {/* 검색 엔진이 엉뚱한 페이지를 표준으로 잡지 않게 canonical 설정, 그러나 html 마크업 코드 대신 gatsby-plugin으로 대체 */}
        {/* <link rel="canonical" href="<https://youngcodej22.github.io />" /> */}
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template

// export const Head: HeadFC<TemplateProps> = () => (
//   <SEO title="page Two">
//     <link
//       id="favicon-icon"
//       rel="icon"
//       href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🔥</text></svg>"
//     />
//   </SEO>
// )

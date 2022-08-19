import React, { FunctionComponent, ReactNode } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import SideNavigation from 'components/Common/SideNavigation'
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
  profileImage: IGatsbyImageData
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #d6e6f0;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 250px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
  profileImage,
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

        {/* https://search.google.com/search-console */}
        {/* URL 접두어 > HTML태그 방식 */}
        <meta
          name="google-site-verification"
          content="7RSa14QWYUjkdmCVpjQoC-IENRfH2yhjuafH6qPYeEY"
        />
        <meta
          name="naver-site-verification"
          content="379dd56578ce5fbdde7107ce132ac7ce59d6195c"
        />

        <html lang="ko" />
        {/* 검색 엔진이 엉뚱한 페이지를 표준으로 잡지 않게 canonical 설정, 그러나 html 마크업 코드 대신 gatsby-plugin으로 대체 */}
        {/* <link rel="canonical" href="<https://youngcodej22.github.io />" /> */}
      </Helmet>
      <GlobalStyle />
      <SideNavigation profileImage={profileImage} />
      <Wrapper>{children}</Wrapper>
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

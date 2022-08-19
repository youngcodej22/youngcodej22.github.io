import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

// @import url('https://fonts.googleapis.com/css2?family=Jua&family=Nanum+Gothic:wght@400;700;800&family=Sawarabi+Gothic&display=swap');
// @import url('http://fonts.cdnfonts.com/css/malgun-gothic-boot&jua');
// font-family: 'Malgun Gothic Boot', 'Jua', sans-serif;
const defaultStyle = css`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Pretendard-Bold', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .inner-container {
    width: 768px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .mt-init {
    margin-top: 70px;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

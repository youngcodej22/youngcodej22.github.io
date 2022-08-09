# Youngcodej22 Blog

## JAM Stack

- Javascript, API, MarkUp Stack
  > Jamstack is an architecture designed to make the web faster, more secure, and easier to scale.
  > (JAM Stack은 더 빠르고, 안전하며, 스케일링하기 쉬운 웹을 만들기 위해 디자인된 아키텍처라고 합니다.)

### 특징

1. 기존 웹사이트

- Client > Server > DB or CMS
- 데이터를 가져와서 렌더링 하기 까지 많은 절차가 필요.

2. JAMStack

- Client > CDN and MicroServices
- 다양한 API를 통해 만든 정적 웹사이트를 Pre-Render한 것을 CDN(Content Delivery Network)을 통해 웹사이트를 만들 수 있다.
- MicroServices로서 여러 API를 통해 만들었기 때문에 공격 노출 범위가 감소. 그래서 안전.

3. 스케일링하기 쉬운 웹사이트를 제공

- 정적 웹 사이트에서의 스케일링은 더 많은 지역에서 홈페이지를 제공할 수 있게 하는 의미. 미리 빌드된 파일 제공을 담당하는 CDN이 그 역할을 한다.

4. Next.js와 다른 점

- Next.js는 SSR을 위해 사용하는 프레임워크. 동적 웹사이트
- Gatsby는 server 없이 사용하는 정적 사이트 생성 프레임워크 (블로그, 포트폴리오, 기업소개페이지 등..)

## Skill

- Gatsby
- Typescript

## Install

1. `npx gatsby-cli new "프로젝트명"`
2. `gatsby develop`으로 실행.
3. `gatsby-plugin-manifest gatsby-plugin-gatsby-cloud`
4. `npm install typescript -g`
5. `npm install gatsby-plugin-typescript`
6. `npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest`

## config

1. gatsby-config.js
2. tsconfig.json: `npm tsc --init`

## Directories

1. contents

- 블로그 포스트 관련 파일들을 저장하기 위한 디렉토리

2. src

- components
  - React Component를 저장하기 위한 디렉토리
- hooks
  - Custom Hooks을 저장하기 위한 디렉토리
- pages
  - 페이지의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리
  - 기본적으로 브라우저에서 pages 디렉토리에 있는 파일의 이름을 통해 페이지에 접근할 수 있기 때문에 페이지의 역할이 아닌 컴포넌트들은 해당 디렉토리에 절대 저장하면 안된다.
- templates

  - 게시글 페이지와 같이 페이지의 역할을 하면서 같은 형식의 여러 컨텐츠를 보여준느 컴포넌트를 저장하기 위한 디렉토리
  - Gatsby에서 제공하는 API를 통해 이 디렉토리에 저장된 템플릿 컴포넌트로 여러 페이지를 만들 수 있습니다.
  - pages 디렉토리와는 다르게 파일명으로 페이지에 접근이 불가능 합니다.

## gatsby plugin

1. gatsby-transformer-remark
   Markdown Parser 역할을 하는 라이브러리입니다.
   마크다운 문법을 HTML 형태로 변환해주어 띄워줄 수 있도록 해주는 핵심 라이브러리입니다.

2. gatsby-remark-images

마크다운 문서 내에서의 이미지 사용을 최적화해주는 라이브러리입니다.
다양한 반응형 이미지 생성, 동적 로딩 등 다양한 기능을 제공해줍니다.

3. gatsby-remark-prismjs & prismjs

prismjs는 문법 하이라이팅 역할을 담당하는 라이브러리입니다.
소스코드를 실제 IDE에서 보는 것처럼 변환해주는 기능을 제공합니다.

4. gatsby-remark-smartypants

해당 라이브러리는 글 내에서 사용되는 여러 문장 부호들을 더 깔끔한 부호로 바꿔주는 기능을 제공하고 있습니다.
이를 통해 글의 가독성을 보다 더 높일 수 있습니다.

5. gatsby-remark-copy-linked-files

마크다운 내에서 사용되는 이미지를 특정 디렉토리로 복사해주는 라이브러리입니다.

일반적으로 루트 디렉토리의 public 디렉토리에 이미지들이 복사됩니다.

6. gatsby-remark-external-links

이 라이브러리는 마크다운 내에서 사용되는 링크 태그의 target, rel 등의 속성을 지정해주는 기능을 제공해줍니다.

### prism Theme

- [prism Theme](https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes)

---

## 참고

이 블로그를 만드는데 아래 자료를 참고하였습니다. 감사합니다.

- [inflearn](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8)

---

### Info

#### utterances (댓글 기능)

- [github:utterances](https://github.com/apps/utterances)
- [docs](https://utteranc.es/)

#### deprecated

나중에 react-helmet 대신 gatsy-head로 변경

- [react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)

- [gatsby-head](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/)

#### Typescript error

> json schema for the typescript compiler's configuration file cannot write file...

- [tsconfig-error](https://bobbyhadz.com/blog/typescript-cannot-write-file-because-it-would-overwrite-input-files)

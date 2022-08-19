---
date: '2022-08-09'
title: '[Gatsby] 🔮 Gatsby Error Unable to copy site files to .cache EPERM: operation not permitted'
categories: ['Gatsby']
summary: 'Gatsby .cache EPERM Error'
thumbnail: './gatsby_error_EPERM.png'
---

## Gatsby Error Unable to copy site files to .cache EPERM

### 문제 발생

```
Unable to copy site files to .cache EPERM: operation not permitted', ...
(사이트 파일을 .cache EPERM에 복사할 수 없음: 작업이 허용되지 않음'...)
```

- vscode의 terminal에서 `gatsby build`를 하던 과정에서 에러 발생.

### 시도

- `.cache` 쪽과 관련 된 것으로 짐작하고 `npm cache clean --force`를 진행. 이후 `gatsby build`를 하여도 계속 남아 있는 에러.

### 해결

1. 여러 자료를 탐색한 결과 **관리자(administrator) 터미널**에서 실행 하여야 한다는 정보를 수집.
2. **관리자(administrator) 터미널**에서 `npm cache clean --force` 이후 `.cache`폴더가 삭제 된 것을 확인.
3. **관리자(administrator) 터미널**에서 `gatsby build` 실행. 에러 없이 build 설공
4. **관리자(administrator) 터미널**에서 `gatsby develop` 실행. 문제 없이 개발 환경에서 실행 되는 것을 확인.
5. 그래도 안된다면 그냥 `.cache`폴더를 삭제하고 다시 실행해보자
6. `.cache` 삭제를 편하게 하기 위해서 `"deploy": "gatsby clean && gatsby build && gh-pages -d public -b main"`를 설정하였다. (배포 할 때 `gatsby clean`으로 인해서 `.cache`를 삭제 후 배포 처리)

---

### Reference

- [stackoverflow](https://stackoverflow.com/questions/39293636/npm-err-error-eperm-operation-not-permitted-rename)
- [github:gatsby](https://github.com/gatsbyjs/gatsby/issues/16353)

# Gatsby로 만드는 블로그
> 강의 : https://www.youtube.com/watch?v=8t0vNu2fCCM

```bash
npm install -g gatsby-cli
gatsby new gatsby-practice https://github.com/gatsbyjs/gatsby-starter-hello-world
```

`package.json`에 접근해보면 다음과 같은 명령어들이 존재함을 확인할 수 있다.

```json
"scripts": {
"build": "gatsby build",
"develop": "gatsby develop",
"format": "prettier --write src/**/*.{js,jsx}",
"start": "npm run develop",
"serve": "gatsby serve",
"test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\""
}
```

아래와 같은 명령어로 서버를 실행할 수 있다.

```bash
npm run develop
```

localhost를 실행해보면 Hello world라는 문구를 확인할 수 있다.

```bash
You can now view gatsby-starter-hello-world in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use npm run build
```

`src/pages`에는 앞으로 만들 페이지들을 담으면 된다. 기본적으로 `index.js`가 생성되어 있다.

```react
import React from "react"

export default () => <div>Gatsby를 배워보자!</div>

```
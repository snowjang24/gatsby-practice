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

`src/pages`에는 앞으로 만들 페이지들을 담으면 된다. 기본적으로 `index.js`가 생성되어 있다. 다음과 같이 수정하고 저장하면 화면에 원하는 문구가 출력된다.

```react
import React from "react"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm JSnow! Front-end developer, I'm learning React!</h2>
    </div>
  )
}

export default IndexPage
```

여기서 `index.js`는 우리가 흔히 보는 `index.html`과 동일한 역할을 한다.

`src/pages`에 `blog.js`를 생성한다. 저장후 `localhost:8000/blog`으로 접속하면 우리가 출력하고자 했던 문구를 볼 수 있다.

```react
import React from "react"

const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Posts will show up here later on</p>
    </div>
  )
}

export default BlogPage
```

이제 블로그 페이지 외에도 `contact.js`와 `about.js`페이지를 만들어 준다.

```react
// about.js
import React from "react"

const AboutPage = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>I'm just student who love front-end and design</p>
    </div>
  )
}

export default AboutPage

// contact.js
import React from "react"

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Contact me !</p>
    </div>
  )
}

export default ContactPage
```

gatsby에서 링크는 일반적인 우리가아는 앵커(`<a>`)를 이용하는 것 보다 `gatsby`모듈에 있는 `Link` 메서드를 이용한다. 이를 이용하면 최적화가 자동으로 이루어진다. 화면 전환시 반짝거리는 로드가 없어진다. 
아래의 두 태그를 직접 눌러보면 `Link`메서드가 더 빠른 것을 알 수 있다.
```react
import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm JSnow! Front-end developer, I'm learning React!</h2>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default IndexPage
```
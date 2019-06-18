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

```javascript
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

```javascript
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

```javascript
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

gatsby에서 링크는 일반적인 우리가아는 앵커(`<a>`)를 이용하는 것 보다 `gatsby`모듈에 있는 `Link` 컴포넌트 이용한다. 이를 이용하면 최적화가 자동으로 이루어진다. 화면 전환시 반짝거리는 로드가 없어진다. 
아래의 두 태그를 직접 눌러보면 `Link`컴포넌트가 더 빠른 것을 알 수 있다.

```javascript
import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>I'm just student who love front-end and design</p>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default AboutPage
```

이제는 모든 페이지에서 공통으로 보이는 header과 footer를 만들어 보려고 한다.

`src/components`폴더를 만들어주고 거기에 `footer.js`를 생성한다.

```javascript
import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>Created by JSnow, © 2019</p>
    </footer>
  )
}

export default Footer
```

아까 이미 완성한 Contact페이지에 만들어진 Footer를 한 번 import 해본다.

```javascript
import React from "react"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Contact me with <a href="mailto:asdka4618@gmail.com"></a>!
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
```

이번에는 Header를 만들어주는데 역시나 `Link`컴포넌트를 사용한다.

```javascript
import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>JSnow</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
```

`IndexPage`에 `Header`와 `Footer`를 넣어준다.

```javascript
import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm JSnow! Front-end developer, I'm learning React!</h2>
      <Footer />
    </div>
  )
}

export default IndexPage
```

이렇게 `Header`과 `Footer`를 적용하고보니 모든 페이지에서도 `Header`와 `Footer`를 보이게 하고 싶다. 
이를 위해서 `src/components`에 `layout.js`를 만든다.
`IndexPage`에 있던 `Header`와 `Footer`를 옮길 것이기 때문에 지워주고 `Layout`만 `import`하고 나머지는 지워준다. 그리고 `Layout`으로 원래 있던 문구를 인자로 전달한다.

```javascript
import React from "react"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm JSnow! Front-end developer, I'm learning React!</h2>
      </Layout>
    </div>
  )
}

export default IndexPage
```

이제 `Layout`을 만든다. 아까 넘겨받은 인자를 `props.children`으로 뿌려준다. 아까 다른 페이지에 넣은 중복된 코드들을 제거해주고 모든 페이지에 `Layout` 을 추가하고 내용들을 모두 인자로 넘겨준다.

```javascript
import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
```

이제 어느정도 블로그의 틀은 잡았다. 하지만 아직 디자인으로 아무것도 없기 때문에 예쁘지 않다. 꾸며주기 위해 `src/styles`를 만들고 `index.css`파일도 만든다. 테스트를 위해 모든 글자를 빨간색으로 만들어본다.

```css
*{
  color: red;
}
```

`Layout`에 한 줄만 추가하면 쉽게 style을 적용할 수 있다.

```javascript
import "../styles/index.css"
```

하지만 그냥 CSS를 쓰는 것보다 좀 더 편하고 유용한 SASS를 쓰는 것이 더 좋을 것 같기 때문에 gatsby의 plugin을 한 번 써보려고 한다. gatsby는 gatsby만의 유용한 plugin들을 제공하고 있다.
플러그인은 Gatsby에서 [plugins](https://www.gatsbyjs.org/plugins/) 검색해서 설치 방법을 확인 할 수 있다. sass를 검색하고 설명에 따라 플러그인을 설치한다.

![image-20190618202347406](README/image-20190618202347406-0857027.png)

플러그인을 설치하고, 루트 디렉토리에 `gatsby-config.js`에 문서를 따라 세팅해준다.
```bash
npm install --save node-sass gatsby-plugin-sass
```

```javascript
module.exports = {
  // in gatsby-config.js
  plugins: [`gatsby-plugin-sass`],
}
```

그리고 `index.css`의 확장자를 `scss`로 바꿔주고 `Layout`에 있던 `import`역시 바꿔준다.

```javascript
import "../styles/index.scss"
```

기본적인 스타일을 적용하기 위해 gatsby에서 제공하는 [기본 블로그 스타일](http://links.mead.io/gatsbystyles)을 가져온다. `index.scss`에 붙여넣기 하여 스타일을 적용한다.

![image-20190618204242221](README/image-20190618204242221-0858162.png)


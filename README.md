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

일반적인 방법으로 `class`이름을 주고 스타일을 적용할 경우 이름이 같아 꼬이는 경우가 발생할 수 있다. 그렇기 때문에 CSS Module을 사용하여 적용한다.
방법은 간단하다. `header.scss`였으면 이름에 module을 붙여주면 된다. `header.module.scss`

링크의 색을 바꿔주는 예시로 한 번 변하는지 보려 한다. 만들어진 `header.module.scss`에 다음과 같이 스타일을 작성하고 저장한다.

```css
.link {
  color: #999;
}
```

`Header`부분에 첫 번째 링크에 스타일 적용을 위해 다음과 같이 수정한다.

```javascript
import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header>
      <h1>JSnow</h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
          </li>
...
```

CSS Module이 적용된 `Link`의 클래스 이름을 보면 다음과 같이 식별자가 따로 붙어 있다. 이렇게 생성된 유니크한 클래스 이름을 통해 다른 컴포넌트에서 사용하는 클래스 이름과 중복되는 것을 방지할 수 있다.

![image-20190619155239165](README/image-20190619155239165-0927159.png)

이제 레이아웃에 대한 스타일을 만들어 주기 위해 동일한 폴더에 `layout.module.scss`를 만들어주고 동일하게 import한다.

```scss
.container {
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;
}
```

```javascript
import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout

```

Sticky Footer를 적용하기 위해 `<div>`하나를 생성하고 그 안에 Footer를 제외한 나머지를 넣어준다.

```javascript
import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
```

`.content`와 `.container`에 관한 스타일을 추가한 뒤 `.content`를 JSX에 추가한다.

```css
.container {
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
```

```javascript
const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
```

몇가지 레이아웃 및 헤더에 관한 스타일을 적용한다.
```css
.header {
  padding: 1rem 0 3rem;
}

.title {
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
}

.nav-list {
  display: flex;
  list-style-type: none;
  margin: 0;
}

.nav-item {
  color: #999;
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;
}

.nav-item:hover {
  color: #666666;
}

.active-nav-item {
  color: #333333;
}
```

```javascript
import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          JSnow Blog
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
```

이제 드디어 데이터를 다뤄보려고 한다. Gatsby는 Graphql을 이용한다. gatsby에서는 graphql의 깊은 부분까지 다루지 않기 때문에 걱정하지 않아도 된다.

Gatsby는 아래의 그림과 같은 원리로 작동한다.

![image-20190619193858882](README/image-20190619193858882-0940739.png)

앞으로 우리는 `gatby-config`파일을 수정하여 데이터를 전달하게 만드려고 한다.

먼저 graphql로 어떻게 데이터를 주고 받는지 확인하기 위해 다음과 같이 페이지 제목과 작성자를 데이터에 넣는다.
```javascript
module.exports = {
  siteMetadata: {
    title: "JSnow's dev blog",
    author: "Snow Jang",
  },
  // in gatsby-config.js
  plugins: [`gatsby-plugin-sass`],
}
```

graphql에서 데이터를 확인하려면 [GraphiQL](http://localhost:8000/__graphql)을 이용한다.

여기서 왼쪽을 보면 쿼리를 넣을 수 있는데 왼편에 쿼리를 넣고 재생 버튼을 누르면 왼쪽에 결과를 볼 수 있다.

![image-20190619204630313](README/image-20190619204630313-0944790.png)

오른쪽 패널 끝의 Docs를 누르면 다음과 같이 볼 수 있는데 

![image-20190619205548500](README/image-20190619205548500-0945348.png)

Graphql에는 **query**, **mutation**, **subscribtion** 3가지 주요한 operation이 있다. 우리는 그 중에 query를 주로 이용할 예정이다. 

`Query` > `Site` > `siteMetadata` 의 경로로 타고 들어가면 우리가 넣은 `title`과 `author` 데이터로 접근할 수 있다.

![image-20190619210603502](README/image-20190619210603502-0945963.png)

접근 경로를 알았으니 실제로 접근해서 동일한 결과가 나오는지 확인하면 다음과 같다.

```javascript
query {
  site {
    siteMetadata {
      title
    }
  }
}
```

![image-20190619212401106](README/image-20190619212401106-0947041.png)

이제 이를 활용하여 웹 페이지의 Title을 반영하려면 다음과 같이 작성하면 된다.

```javascript
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
```
graphql을 제대로 이용하기 위해서는 `graphql`과 `useStaticQuery` 모듈을 import 해서 쓴다.
그리고 `data` 변수에 useStaticQuery()메서드와 graphql메서드를 이용하는데 이용 방식이 좀 특이하다 앞에서 썼던 쿼리를 template string의 형식인 Backtick 사이에 넣어서 이용한다. 결과가 올바르게 반영 되었다.

![image-20190619212934835](README/image-20190619212934835-0947374.png)

동일한 방법으로 한 번 `Footer`에 author이름을 적용해보면 다음과 같다.

```javascript
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  )
}

export default Footer
```

참고로 두 개를 가져오고 싶으면 다음과 같이 작성하면 둘 다 가져올 수 있다.

![image-20190619214624243](README/image-20190619214624243-0948384.png)

이렇게 graphiql도 유용하지만 좀 더 유용한 도구를 사용해보려 한다. [graphql playground](https://github.com/prisma/graphql-playground)는 GraphiQL의 구성 요소를 사용하지만, 더 나은 (로컬) 개발 워크 플로우를 가능하게 한다. GraphQL을 위한 IDE다. 더 많은 기능을 담고 있다.

먼저 이를 위해서 루트 폴더에 `.env.development`라는 환경 파일을 만든다. 그리고 다음과 같이 작성하면 된다.

```
GATSBY_GRAPHQL_IDE=playground
```

그리고 가동중이던 서버를 끄고 필요한 라이브러리를 하나 받아준다.

```bash
npm install --save-dev env-cmd
```

그리고 이를 이용하기 위해 `package.json`에 `develop` 부분을 다음과 같이 수정한다.

```json
{
  "name": "gatsby-starter-hello-world",
  "private": true,
  "description": "A simplified bare-bones starter for Gatsby",
  "version": "0.1.0",
  "license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "develop": "env-cmd .env.development gatsby develop",
    "format": "prettier --write src/**/*.{js,jsx}",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\""
  },
  "dependencies": {
```

이제 세팅을 다 끝내고 `npm run develop`으로 서버를 키면 다음과 같은 에러를 만나게 된다.
```bash
> npm run develop

> gatsby-starter-hello-world@0.1.0 develop /Users/soonho/project/gatsby-practice
> env-cmd .env.development gatsby develop

Error: Unable to locate env file at default location (./.env)
    at /Users/soonho/project/gatsby-practice/node_modules/env-cmd/dist/get-env-vars.js:44:19
    at Generator.throw (<anonymous>)
    at rejected (/Users/soonho/project/gatsby-practice/node_modules/env-cmd/dist/get-env-vars.js:5:65)
    at processTicksAndRejections (internal/process/task_queues.js:89:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! gatsby-starter-hello-world@0.1.0 develop: `env-cmd .env.development gatsby develop`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the gatsby-starter-hello-world@0.1.0 develop script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/soonho/.npm/_logs/2019-06-19T13_22_21_553Z-debug.log
```

[Using the GraphQL Playground](https://www.gatsbyjs.org/docs/using-graphql-playground/)를 참고하면 좋을 것 같다. 

다음과 같이 `-f`를 가운데에 추가하여 저장하고 다시 `npm run develop`를 실행한다.

```json
"develop": "env-cmd -f .env.development gatsby develop"
```

[http://localhost:8000/___graphql](http://localhost:8000/___graphql)로 접속하면 아까와는 다른 화면이 나온다. 바로 GraphQL playground다. 아까의 GraphiQL과 동일하게 작동하며 기능이 좀 더 많다.

![image-20190619224217355](README/image-20190619224217355-0951737.png)

탭 기능도 있어서 여러개 만들 수 있고 DOCS기능도 expand형식으로 되어있어 더 보기 쉽다.

![image-20190619224322304](README/image-20190619224322304-0951802.png)
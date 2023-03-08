<h1 align='center'>세계웹</h1>

## 📖 목차

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>환경설정 및 실행</a>
    </li>
    <li>
        <a href='#features'>요구사항</a>
    </li>
    <li>
        <a href='#library'>라이브러리</a>
    </li>
    <li>
        <a href='#structure'>폴더 구조</a>
    </li>
    <li>
        <a href='#agonize'>고민한 부분</a>
    </li>
    <li>
        <a href='#improve'>개선사항</a>
    </li>
    
</ol>

<h2 id='overview'>Overview</h2>

### 조회 (ALL & 대륙별 & Like)

<video src='https://user-images.githubusercontent.com/57670160/223760909-daa00951-a8a7-4144-afb4-8beaec5fa5d7.mov'></video>

### 좋아요

<video src='https://user-images.githubusercontent.com/57670160/223761166-376dea7f-96ff-4be4-8961-00957f24cd63.mov'></video>

### 상세 페이지

<video src='https://user-images.githubusercontent.com/57670160/223761397-891ccf97-f279-4537-acc2-727d29ffe3b6.mov'></video>

<h2 id='run'>환경설정 및 실행</h2>

<pre>
git clone https://github.com/mingyeongho/WorldWeb.git

npm install

npm run dev
</pre>

<h2 id='features'>요구사항</h2>

- [x] 대륙, 국가, 언어를 조회할 수 있다.
- [x] 대륙에 포함되는 국가를 조회할 수 있다.
- [x] 국가에서 사용하는 언어를 조회할 수 있다.
- [x] 국가 코드로 국가를 검색할 수 있다.
- [x] 국가를 좋아요할 수 있다. (로컬스토리지이용)
- [x] 좋아요한 국가를 조회할 수 있다.
- [x] 국가 정보에 대한 상세 정보 페이지를 볼 수 있다.

<h2 id='library'>라이브러리</h2>

<img width="531" alt="image" src="https://user-images.githubusercontent.com/57670160/223760296-9f4fe123-fb5a-4756-aa03-4c5874a385ed.png">

<h2 id='structure'>폴더 구조</h2>

<pre>
.
├── components
│   ├── Atoms
│   │   ├── A
│   │   │   ├── A.stories.tsx
│   │   │   ├── A.style.tsx
│   │   │   └── A.tsx
│   │   ├── Button
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.style.tsx
│   │   │   └── Button.tsx
│   │   ├── FloatingBox
│   │   │   ├── FloatingBox.stories.tsx
│   │   │   ├── FloatingBox.style.tsx
│   │   │   └── FloatingBox.tsx
│   │   ├── Input
│   │   │   ├── Input.stories.tsx
│   │   │   ├── Input.style.tsx
│   │   │   └── Input.tsx
│   │   └── Span
│   │       ├── Span.stories.tsx
│   │       ├── Span.style.tsx
│   │       └── Span.tsx
│   ├── Molecules
│   │   ├── CountryBody
│   │   │   ├── CountryBody.stories.tsx
│   │   │   ├── CountryBody.style.tsx
│   │   │   └── CountryBody.tsx
│   │   ├── CountryHead
│   │   │   ├── CountryHead.stories.tsx
│   │   │   ├── CountryHead.style.tsx
│   │   │   └── CountryHead.tsx
│   │   ├── Form
│   │   │   ├── Form.stories.tsx
│   │   │   ├── Form.style.tsx
│   │   │   └── Form.tsx
│   │   ├── InfoRow
│   │   │   ├── InfoRow.stories.tsx
│   │   │   ├── InfoRow.style.tsx
│   │   │   └── InfoRow.tsx
│   │   └── Tab
│   │       ├── Tab.stories.tsx
│   │       ├── Tab.style.tsx
│   │       └── Tab.tsx
│   ├── Organisms
│   │   ├── Countries
│   │   │   ├── Countries.stories.tsx
│   │   │   ├── Countries.style.tsx
│   │   │   └── Countries.tsx
│   │   ├── CountriesTab
│   │   │   ├── CountriesTab.stories.tsx
│   │   │   ├── CountriesTab.style.tsx
│   │   │   └── CountriesTab.tsx
│   │   ├── Country
│   │   │   ├── Country.stories.tsx
│   │   │   ├── Country.style.tsx
│   │   │   └── Country.tsx
│   │   ├── CountryInfo
│   │   │   ├── CountryInfo.stories.tsx
│   │   │   ├── CountryInfo.style.tsx
│   │   │   └── CountryInfo.tsx
│   │   ├── InfoAside
│   │   │   ├── InfoAside.stories.tsx
│   │   │   ├── InfoAside.style.tsx
│   │   │   └── InfoAside.tsx
│   │   └── InfoContent
│   │       ├── InfoContent.stories.tsx
│   │       ├── InfoContent.style.tsx
│   │       └── InfoContent.tsx
│   └── Templates
│       ├── CountryTemplate
│       │   ├── CountryTemplate.stories.tsx
│       │   ├── CountryTemplate.style.tsx
│       │   └── CountryTemplate.tsx
│       └── HomeTemplate
│           ├── HomeTemplate.stories.tsx
│           ├── HomeTemplate.style.tsx
│           └── HomeTemplate.tsx
├── gql
│   ├── GET_ALL_COUNTRIES.ts
│   ├── GET_COUNTRIES_BY_CONTINENT.ts
│   └── query.ts
├── hooks
│   └── useForm.ts
├── pages
│   ├── [country].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── stories
│   ├── Button.stories.ts
│   ├── Button.tsx
│   ├── Header.stories.ts
│   ├── Header.tsx
│   ├── Introduction.mdx
│   ├── Page.stories.ts
│   ├── Page.tsx
│   ├── assets
│   │   ├── code-brackets.svg
│   │   ├── colors.svg
│   │   ├── comments.svg
│   │   ├── direction.svg
│   │   ├── flow.svg
│   │   ├── plugin.svg
│   │   ├── repo.svg
│   │   └── stackalt.svg
│   ├── button.css
│   ├── header.css
│   └── page.css
├── styles
│   ├── GlobalStyle.ts
│   └── Palette.ts
└── utils
    ├── apollo.ts
    ├── constant.ts
    ├── dummyData.ts
    ├── function.ts
    └── interface.ts
</pre>

<h1 align='center'>μΈκ³μΉ</h1>

## π λͺ©μ°¨

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>νκ²½μ€μ  λ° μ€ν</a>
    </li>
    <li>
        <a href='#features'>μκ΅¬μ¬ν­</a>
    </li>
    <li>
        <a href='#library'>λΌμ΄λΈλ¬λ¦¬</a>
    </li>
    <li>
        <a href='#structure'>ν΄λ κ΅¬μ‘°</a>
    </li>
</ol>

<h2 id='overview'>Overview</h2>

### μ‘°ν (ALL & λλ₯λ³ & Like)

<video src='https://user-images.githubusercontent.com/57670160/223760909-daa00951-a8a7-4144-afb4-8beaec5fa5d7.mov'></video>

### μ’μμ

<video src='https://user-images.githubusercontent.com/57670160/223761166-376dea7f-96ff-4be4-8961-00957f24cd63.mov'></video>

### μμΈ νμ΄μ§

<video src='https://user-images.githubusercontent.com/57670160/223761397-891ccf97-f279-4537-acc2-727d29ffe3b6.mov'></video>

<h2 id='run'>νκ²½μ€μ  λ° μ€ν</h2>

<pre>
git clone https://github.com/mingyeongho/WorldWeb.git

npm install

npm run dev
</pre>

<h2 id='features'>μκ΅¬μ¬ν­</h2>

- [x] λλ₯, κ΅­κ°, μΈμ΄λ₯Ό μ‘°νν  μ μλ€.
- [x] λλ₯μ ν¬ν¨λλ κ΅­κ°λ₯Ό μ‘°νν  μ μλ€.
- [x] κ΅­κ°μμ μ¬μ©νλ μΈμ΄λ₯Ό μ‘°νν  μ μλ€.
- [x] κ΅­κ° μ½λλ‘ κ΅­κ°λ₯Ό κ²μν  μ μλ€.
- [x] κ΅­κ°λ₯Ό μ’μμν  μ μλ€. (λ‘μ»¬μ€ν λ¦¬μ§μ΄μ©)
- [x] μ’μμν κ΅­κ°λ₯Ό μ‘°νν  μ μλ€.
- [x] κ΅­κ° μ λ³΄μ λν μμΈ μ λ³΄ νμ΄μ§λ₯Ό λ³Ό μ μλ€.

<h2 id='library'>λΌμ΄λΈλ¬λ¦¬</h2>

<img width="531" alt="image" src="https://user-images.githubusercontent.com/57670160/223760296-9f4fe123-fb5a-4756-aa03-4c5874a385ed.png">

<h2 id='structure'>ν΄λ κ΅¬μ‘°</h2>

<pre>
.
βββ components
βΒ Β  βββ Atoms
βΒ Β  βΒ Β  βββ A
βΒ Β  βΒ Β  βΒ Β  βββ A.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ A.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ A.tsx
βΒ Β  βΒ Β  βββ Button
βΒ Β  βΒ Β  βΒ Β  βββ Button.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Button.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Button.tsx
βΒ Β  βΒ Β  βββ FloatingBox
βΒ Β  βΒ Β  βΒ Β  βββ FloatingBox.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ FloatingBox.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ FloatingBox.tsx
βΒ Β  βΒ Β  βββ Input
βΒ Β  βΒ Β  βΒ Β  βββ Input.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Input.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Input.tsx
βΒ Β  βΒ Β  βββ Span
βΒ Β  βΒ Β      βββ Span.stories.tsx
βΒ Β  βΒ Β      βββ Span.style.tsx
βΒ Β  βΒ Β      βββ Span.tsx
βΒ Β  βββ Molecules
βΒ Β  βΒ Β  βββ CountryBody
βΒ Β  βΒ Β  βΒ Β  βββ CountryBody.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountryBody.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountryBody.tsx
βΒ Β  βΒ Β  βββ CountryHead
βΒ Β  βΒ Β  βΒ Β  βββ CountryHead.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountryHead.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountryHead.tsx
βΒ Β  βΒ Β  βββ Form
βΒ Β  βΒ Β  βΒ Β  βββ Form.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Form.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Form.tsx
βΒ Β  βΒ Β  βββ InfoRow
βΒ Β  βΒ Β  βΒ Β  βββ InfoRow.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ InfoRow.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ InfoRow.tsx
βΒ Β  βΒ Β  βββ Tab
βΒ Β  βΒ Β      βββ Tab.stories.tsx
βΒ Β  βΒ Β      βββ Tab.style.tsx
βΒ Β  βΒ Β      βββ Tab.tsx
βΒ Β  βββ Organisms
βΒ Β  βΒ Β  βββ Countries
βΒ Β  βΒ Β  βΒ Β  βββ Countries.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Countries.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Countries.tsx
βΒ Β  βΒ Β  βββ CountriesTab
βΒ Β  βΒ Β  βΒ Β  βββ CountriesTab.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountriesTab.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountriesTab.tsx
βΒ Β  βΒ Β  βββ Country
βΒ Β  βΒ Β  βΒ Β  βββ Country.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Country.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ Country.tsx
βΒ Β  βΒ Β  βββ CountryInfo
βΒ Β  βΒ Β  βΒ Β  βββ CountryInfo.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountryInfo.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ CountryInfo.tsx
βΒ Β  βΒ Β  βββ InfoAside
βΒ Β  βΒ Β  βΒ Β  βββ InfoAside.stories.tsx
βΒ Β  βΒ Β  βΒ Β  βββ InfoAside.style.tsx
βΒ Β  βΒ Β  βΒ Β  βββ InfoAside.tsx
βΒ Β  βΒ Β  βββ InfoContent
βΒ Β  βΒ Β      βββ InfoContent.stories.tsx
βΒ Β  βΒ Β      βββ InfoContent.style.tsx
βΒ Β  βΒ Β      βββ InfoContent.tsx
βΒ Β  βββ Templates
βΒ Β      βββ CountryTemplate
βΒ Β      βΒ Β  βββ CountryTemplate.stories.tsx
βΒ Β      βΒ Β  βββ CountryTemplate.style.tsx
βΒ Β      βΒ Β  βββ CountryTemplate.tsx
βΒ Β      βββ HomeTemplate
βΒ Β          βββ HomeTemplate.stories.tsx
βΒ Β          βββ HomeTemplate.style.tsx
βΒ Β          βββ HomeTemplate.tsx
βββ gql
βΒ Β  βββ GET_ALL_COUNTRIES.ts
βΒ Β  βββ GET_COUNTRIES_BY_CONTINENT.ts
βΒ Β  βββ query.ts
βββ hooks
βΒ Β  βββ useForm.ts
βββ pages
βΒ Β  βββ [country].tsx
βΒ Β  βββ _app.tsx
βΒ Β  βββ _document.tsx
βΒ Β  βββ api
βΒ Β  βΒ Β  βββ hello.ts
βΒ Β  βββ index.tsx
βββ stories
βΒ Β  βββ Button.stories.ts
βΒ Β  βββ Button.tsx
βΒ Β  βββ Header.stories.ts
βΒ Β  βββ Header.tsx
βΒ Β  βββ Introduction.mdx
βΒ Β  βββ Page.stories.ts
βΒ Β  βββ Page.tsx
βΒ Β  βββ assets
βΒ Β  βΒ Β  βββ code-brackets.svg
βΒ Β  βΒ Β  βββ colors.svg
βΒ Β  βΒ Β  βββ comments.svg
βΒ Β  βΒ Β  βββ direction.svg
βΒ Β  βΒ Β  βββ flow.svg
βΒ Β  βΒ Β  βββ plugin.svg
βΒ Β  βΒ Β  βββ repo.svg
βΒ Β  βΒ Β  βββ stackalt.svg
βΒ Β  βββ button.css
βΒ Β  βββ header.css
βΒ Β  βββ page.css
βββ styles
βΒ Β  βββ GlobalStyle.ts
βΒ Β  βββ Palette.ts
βββ utils
    βββ apollo.ts
    βββ constant.ts
    βββ dummyData.ts
    βββ function.ts
    βββ interface.ts
</pre>

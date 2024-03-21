# Fox game

Start from welcome screen
http://localhost:3000/welcome
Play button is blocked until name is typed in the input field

> **Note:**
> Tech stack: TS, Next.js, React, css modules, jest
> I've used useContext instead of state managment libs because in my perspective this app doesn't require big complex state managment
> I've used native img instead of next/Image because next images require certain domain names specified in the next config but due to API I can not specify it (cat API always uses different CDN)
> I am using local storage for state persistence

## Run

```bash
npm run dev
```

```bash
yarn dev
```

## Running Tests

```bash
npm test
```

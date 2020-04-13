# NextKu Admin

A Next.js 9 Admin Boilerplate with Redux, Redux-Saga, and Material-UI.

## Prerequisites

- Node.js (v10 or higher)
- `npm` (v6.10 or higher) or `yarn` (v1.20 or higher)

## Getting Started

- Development

  ```bash
  # Clone the repo and then run
  $ yarn install # or npm install
  $ yarn dev # or npm run dev
  ```

- Production

  ```bash
  # Clone the repo and then run
  $ yarn install # or npm install
  $ yarn build # or npm run build
  $ yarn start # or npm start
  ```

### Project Directory

```
.
+-- pages/
+-- src/
|   +-- actions/
|   +-- components/
|   +-- reducers/
|   +-- sagas/
|   +-- store.js
```

`pages/` - Next.js pages

`src/` - Actions, components, reducers, sagas

`src/actions` - Redux actions

`src/components` - Pure React components.

`src/reducers` - Redux reducers

`src/sagas` - Redux sagas

`store.js` - Redux store

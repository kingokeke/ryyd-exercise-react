# Exercise React
This exercise aims to illustrate the fundamentals of building a front-end in React. In this exercise, I designed an SPA dashboard and master-detail page using React. React Router was used for navigating between pages. React hooks were used with functional components in place of class based components for stateful components. UI-kit was used for providing user interface CSS-based components that were manually converted to React.

## Installation and Set up

To install and run the API/GraphQL server using yarn:

```bash
yarn
yarn start
```

To install and run the API/GraphQL server using npm

```bash
npm install
npm start
```

---

To install and run the React client using yarn

```bash
cd client
yarn
yarn start
```

To install and run the React client using npm

```bash
cd client
npm install
npm start
```

---

The server part of this system is already designed and exposes a set of REST endpoints via the `/api` route and a GraphQL endpoint.

The client has been setup to consume graphql if you chose to use that instead.

## Task

Build 3 views

- A dashboard with stats and the trips listed in a table.
- A drivers' master-detail page
- A trip page to show the detail for a single trip

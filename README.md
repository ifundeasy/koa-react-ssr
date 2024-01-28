# koa-react-ssr
Forked from [sheth-jay/React-18-SSR-Implementation](https://github.com/sheth-jay/React-18-SSR-Implementation/blob/master/README.md) with some improvement points:
1. Replace `react-scripts` with `babel` and `webpack`
2. Replace `express` with `koa`
3. Directory restucture
4. Just using `npm` instead `yarn`
5. Adding `eslint` with `air-bnb` configuration template
6. Adding `jest` for standard unit testing
7. Adding `lint-stagged` for clean code before commit
8. Adding `nodemon` for hot reload server code

This is a React application that has implemented React 18's server-side API for rendering components on the server. This allows for improved performance and better user experience by pre-rendering components on the server and sending them to the client.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Clone the Repository

1. Open your terminal.
2. Change the current working directory to the location where you want to clone the project.
3. Run the following command to clone the repository:


### Install Dependencies

1. Navigate to the project's root directory in the terminal.
2. Run the following command to install the required dependencies:

```js
npm install
```

### Build the Project

Before starting the project, it's recommended to build the application to ensure you have the latest changes. To build the project, run the following command:

```js
npm run react:build
```


### Start the Project

To start the React application with server-side rendering (SSR), run the following command:

```js
npm run start
```

This will launch the application on a local development server. Open your web browser and visit `http://localhost:3000` to see the application in action.

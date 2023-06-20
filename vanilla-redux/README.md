# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





redux 클릭버튼 state dispatch

```html
import {createStore} from "redux";

console.log("redux")

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS"

number.innerText = 0;

// const reducer = () => {
//   return "hello"
// };


// const countModifier = (state) => {
//   return state;
// };
// const countModifier = (count = 0, action) => {
//   if (action.type === "ADD"){
//     return count + 1;
//   } else if(action.type === "MINUS") {
//     return count - 1;
//   } else {
//     return count ; 
//   }
  const countModifier = (count = 0, action) => {
    switch (action.type) {
      case ADD:
        return count + 1;
      case MINUS:
        return count -1;
      default:
        return count;
    }
  };
  const countStore = createStore(countModifier)
  
  const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange)
// countStore.dispatch({type : "ADD"}); 
// // > object가 되어야함 type : dldl
// countStore.dispath({type : "MINUS"}); 
const handleAdd = () => {
  countStore.dispatch({type:"ADD"})
}

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS"})
}

// add.addEventListener("click", handleAdd);
// add.addEventListener("click", () => countStore.dispatch({type : "ADD"}))

console.log(countStore.getState());
// minus.addEventListener("click", handleMinus);
// minus.addEventListener("click", () => countStore.dispatch({type : "MINUS"}))





// const store = createStore(reducer);

// let count = 0;
// numbaer.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };
// const handleMinus = () => {
//   count = count - 1
//   updateText();
// };
add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus);

```

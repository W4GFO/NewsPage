# NewsPage
This is from the Frontend mentor project:
[News Homepage](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl/hub)

## Getting Started 

This project was crated with the following command:

```
> npx create-react-app news-room --template typescript
```

The additional npm installs needed are:

```
> npm install sass
> npm install react-icons
> npm install react-router-dom
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Primary Work

In this project I was concentrating on the Grid and Flexbox layouts and having them work together.

Also, I wanted to concentrate on the animation of the menu bar's sliding into and out of view on the mobile form-factor.

### Questions & Issues

I had some issues lining up the main image on the page - especially on the desktop.

I would appreciate any feedback on this issue that anyone see.

The code for the homepage image styling is in 'HomePageStyle.scss' on line 68. This is where I was playing around with the layout for the large image the most.

Also, I ran into chanllenges animating the hamburger menu to the provided 'X' icon. I have this set up in the JSX and wasn't sure how to animate this. I understand supplying images in HTML instead of CSS is more efficient, but then I run into this problem.  If anyone has any suggestions I would certainly welcome your feedback.

The code for the hamburger and X icons are in 'NavbarFrame.tsx' on line 16 and 24.

Thank you in advance for any input.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


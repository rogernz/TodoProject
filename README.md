<p align="center"><a href="https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f"><img src="https://i.imgur.com/PATsTx2.png" title="View tutorial" alt="React, React Router, Redux and Redux Thunk" width="900"></a></p>

[![Dependency Status](https://dependencyci.com/github/notrab/create-react-app-redux/badge)](https://dependencyci.com/github/notrab/create-react-app-redux)

* Tutorial: [Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)
* Example: [View on Heroku](https://cra-redux-router-thunk.herokuapp.com/) 🙌

## Installation

```bash
git clone https://github.com/notrab/create-react-app-redux.git
cd create-react-app-redux
yarn
```

## Get started

```bash
yarn start
```

This boilerplate is built using [create-react-app](https://github.com/facebookincubator/create-react-app) so you will want to read the User Guide for more goodies.

## eslint

```
yarn add eslint-config-airbnb-base eslint eslint-plugin-import
yarn add babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier-eslint prettier -D
```

## problem and thinking
- firebaseui or not
We have two choices, firebaseui and oauth2 api.
  + firebaseui
    - advantage: google library, easy to use, easy to integrate
    - disadvange: 
      + black box
  + oauth2
    - fully control the token refresh
    - need to write a log of code to take care of the token and refresh
  


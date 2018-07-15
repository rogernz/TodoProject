import React from 'react';

const user = {
  googleAccessToken: '',
  accessToken: '',
  todos: [],
  setGoogleAccessToken: () => {},
  setAccessToken: () => { },
};

const UserContext = React.createContext(user);
export default UserContext;

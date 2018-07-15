import React from 'react';
import UserContext from 'userContext';

export default function withToken(Component) {
  return function tokenedComponent(props) {
    return (
      <UserContext.Consumer>{tokens => <Component {...props} {...tokens} />}</UserContext.Consumer>
    );
  };
}

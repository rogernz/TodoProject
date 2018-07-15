import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import './login.css';
import withToken from 'hocs/withToken';

class Login extends React.PureComponent {
  static propTypes = {
    setGoogleAccessToken: PropTypes.func,
    history: PropTypes.func,
    location: PropTypes.shape(),
  };

  static defaultProps = {
    setGoogleAccessToken: () => {},
    history: () => {},
    location: {},
  };

  constructor(props) {
    super(props);
    this.getUIConfig = this.getUIConfig.bind(this);
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      console.log(JSON.stringify(this.props), 'componentDidMount', JSON.stringify(user));
      const { history, setGoogleAccessToken } = this.props;
      if (user) {
        const { stsTokenManager } = JSON.parse(JSON.stringify(user));
        setGoogleAccessToken(stsTokenManager.accessToken);
        history.push('/chi');
        history.go('/chi');
      }
    });
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  getUIConfig(setGoogleAccessToken) {
    const { history, location } = this.props;
    return {
      signInFlow: 'popup',
      signInSuccessUrl: '/chi',
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          const { accessToken } = authResult.credential;
          console.log(
            'Login signInSuccessWithAuthResult after history push',
            ' current location',
            location,
          );
          setGoogleAccessToken(accessToken);
          history.push('/chi');
          history.go('/chi');
          return false;
        },
      },
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: ['https://www.googleapis.com/auth/plus.login'],
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: 'select_account',
          },
        },
        // auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
    };
  }

  render() {
    const { setGoogleAccessToken } = this.props;
    return (
      <div className="login">
        <img className="bg" alt="background" />
        <div className="middle">
          <StyledFirebaseAuth
            uiConfig={this.getUIConfig(setGoogleAccessToken)}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    );
  }
}

export default withToken(Login);

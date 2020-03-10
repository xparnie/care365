import React from 'react';

import { useAuth0 } from '../../auth0/react-auth0-spa';

import Shelf from '../../components/shelf/shelf.component';

import './loginBox.styles.scss';

const LoginBox = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const returnTo = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');

  return (
    <div className="loginBox">
      <Shelf large>
        <p>You are {isAuthenticated ? '' : 'not '}logged in.</p>
      </Shelf>
      {!isAuthenticated && (
        <a
          className="button"
          href="/"
          onClick={event => {
            event.preventDefault();
            loginWithRedirect({});
          }}
        >
          Log In
        </a>
      )}
      {isAuthenticated && (
        <a
          className="button"
          href="/"
          onClick={event => {
            event.preventDefault();
            logout({
              returnTo: returnTo
            });
          }}
        >
          Log Out
        </a>
      )}
    </div>
  );
};

export default LoginBox;

// IE 11 Polyfills
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// React
import React, { useEffect, useReducer } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Google Analytics
import ReactGA from 'react-ga';

// Auth0
import { Auth0Provider } from './auth0/react-auth0-spa';
import history from './auth0/history';
import config from './auth0/auth_config.json';

// Database and API
import { getAllCardsPerCategory } from './api';
import { sortDataFromDB } from './functions/data';

// Context
import { AssessmentProvider } from './assessmentStore';
import {
  assessmentReducer,
  initialAssessmentState
} from './reducers/assessmentReducer';

// Components
import Navigation from './components/navigation/navigation.component';
import Container from './components/container/container.component';

const App = () => {
  const [assessmentState, assessmentDispatch] = useReducer(
    assessmentReducer,
    initialAssessmentState
  );

  useEffect(() => {
    ReactGA.initialize('UA-23486989-3');
    databaseGetCardsHandler();
  }, []);

  const databaseGetCardsHandler = () => {
    // Only fetch data when App() is rendered the first time
    getAllCardsPerCategory().then(res => {
      let sortedData = sortDataFromDB(res.CardList);

      return assessmentDispatch({
        type: 'MERGE_DB_DATA',
        payload: sortedData
      });
    });
  };

  // A function that routes the user to the right place
  // after login
  const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <AssessmentProvider value={{ assessmentState, assessmentDispatch }}>
        <Router>
          <>
            <Navigation />
            <Container />
          </>
        </Router>
      </AssessmentProvider>
    </Auth0Provider>
  );
};

render(<App />, document.getElementById('root'));

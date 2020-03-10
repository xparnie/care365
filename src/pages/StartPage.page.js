import React, { useContext, useEffect } from 'react';
import { useAuth0 } from '../auth0/react-auth0-spa';
import { addProviderRecord, getIpAddress } from '../api';

import Page from '../components/page/page.component';
import Start from '../components/start/start.component';
import Content from '../components/content/content.component';

import assessmentContext from '../assessmentStore';

const StartPage = ({ provider }) => {
  const { user } = useAuth0();
  const { assessmentDispatch } = useContext(assessmentContext);

  const dispatchHandler = (type, data) => {
    return assessmentDispatch({
      type,
      payload: { data }
    });
  };

  const providerBody = {
    FirstName: '',
    LastName: '',
    EmailAddress: user.email,
    AccountNum: '',
    CreatedIP: '',
    ModifiedIP: ''
  };

  const setProviderData = () => {
    if (!provider.email) {
      dispatchHandler('SET_PROVIDER_EMAIL', user.email);
    }

    if (!provider.id) {
      addProviderRecord(providerBody)
        .then(id => {
          dispatchHandler('SET_PROVIDER_ID', id);
        })
        .then(function() {
          getIpAddress()
            .then(result => {
              dispatchHandler('SET_PROVIDER_IP', result.ip);
            })
            .catch(() => {
              dispatchHandler('SET_PROVIDER_IP', '0.0.0.0');
            });
        })
        .catch(function() {
          console.log('bad data');
        });
    }
  };

  useEffect(() => {
    setProviderData();
  });

  return (
    <Page>
      <Content>
        <Start />
      </Content>
    </Page>
  );
};

export default StartPage;

import React from 'react';

import Page from '../components/page/page.component';
import Loading from '../components/loading/loading.component';
import Content from '../components/content/content.component';

const LoadingPage = () => (
  <Page>
    <Content>
      <Loading />
    </Content>
  </Page>
);

export default LoadingPage;

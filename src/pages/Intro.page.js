import React from 'react';

import Page from '../components/page/page.component';
import Icon from '../components/icon';
import Content from '../components/content/content.component';
import Progress from '../components/progress/progress.component';

import './styles/intro.styles.scss';

const Intro = () => (
  <Page>
    <>
      <div className="header">
        <Icon name="logo" />
      </div>

      <div className="intro">
        <div className="intro-heading">
          <h1 className="intro-heading-text">Your Better Hearing Journey</h1>
        </div>
        <div className="intro-circle">
          <p className="intro-circle-text">
            Hear better. <br />
            Live better.
          </p>
        </div>
      </div>

      <Content>
        <Progress
          goTo={'/lifestyle-assessment'}
          classNames={'progress progress_left progress_white'}
          text={null}
        />
      </Content>
    </>
  </Page>
);

export default Intro;

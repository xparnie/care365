import React from 'react';

import Button from '../components/button/button.component';
import Content from '../components/content/content.component';
import Copy from '../components/copy/copy.component';
import Heading from '../components/heading/heading.component';
import Shelf from '../components/shelf/shelf.component';
import Page from '../components/page/page.component';

import './styles/hearingTest.styles.scss';

const HearingTest = () => (
  <Page>
    <div className="hearing-test-background">
      <video
        playsInline=""
        loop="loop"
        autoPlay="autoPlay"
        muted="muted"
        id="bgvideo"
      >
        <source
          poster="/images/hearing-test/hearing-test-poster.jpg"
          src="/videos/hearing-test/patient-journey-white.mp4"
          type="video/mp4"
        />
        <source
          poster="/images/hearing-test/hearing-test-poster.jpg"
          src="/videos/hearing-test/patient-journey-white.webm"
          type="video/webm"
        />
        <source
          poster="/images/hearing-test/hearing-test-poster.jpg"
          src="/videos/hearing-test/patient-journey-white.ogv"
          type="video/ogv"
        />
      </video>
    </div>

    <Content>
      <Shelf xlarge>
        <Heading large blue>
          Your hearing evaluation
        </Heading>
      </Shelf>
      <Shelf xlarge>
        <Copy>
          Let's go over your hearing evaluation and <br />
          see what the results tell us.
        </Copy>
      </Shelf>
      <Shelf>
        <Button link={'/hearing-loss'}>Done</Button>
      </Shelf>
    </Content>
  </Page>
);

export default HearingTest;

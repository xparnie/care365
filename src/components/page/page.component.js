import React, { useEffect } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';

const StyledPage = styled.main`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  transition: transform 1s ease-in-out;
  overflow: hidden;
`;

const Page = ({
  children,
  location: { key, pathname, search, state },
  ...props
}) => {
  const cx = classNames({
    page: true,
    'page--prev': state && state.prev
  });

  const setPageClassName = path => {
    document.body.className = '';
    // remove leading slash from pathname
    let cleanPageClassName = path.replace(/\//g, '');
    if (cleanPageClassName === '') {
      cleanPageClassName = 'intro';
    }
    document.body.classList.add(cleanPageClassName + '-page'); // append '-page' to avoid class clashes
  };

  useEffect(() => {
    ReactGA.pageview(pathname + search);
    setPageClassName(pathname);
  }, [pathname, search]);

  return (
    <StyledPage
      {...props}
      key={key}
      className={cx}
      id="main"
      role="main"
      tabIndex="-1"
      aria-label="main content"
    >
      {children}
    </StyledPage>
  );
};

export default withRouter(Page);

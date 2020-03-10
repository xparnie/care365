import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import Shelf from '../../components/shelf/shelf.component';
import Heading from '../../components/heading/heading.component';

import './navigation.styles.scss';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleClass = () => setExpanded(!expanded);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (isLoaded) {
    return (
      <div className="main-nav">
        <div className={`nav-background ${expanded ? 'expanded' : ''}`} />
        <button
          onClick={toggleClass}
          className={`navbar-toggler hamburger ${expanded ? 'expanded' : ''}`}
          type="button"
          aria-expanded={expanded}
          aria-label="Navigation trigger"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        <div className={`navigation-wrap ${expanded ? 'expanded' : ''}`}>
          <div className="navigationSection">
            <Shelf>
              <Heading medium white>
                About You
              </Heading>
            </Shelf>
            <nav role="navigation">
              <ul className="navigation">
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className={`navigation-link`}
                    to={'/lifestyle-assessment'}
                  >
                    Lifestyle Assessment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/sound-gap'}
                  >
                    Sound Gap
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/impacts-of-hearing-loss-two'}
                  >
                    Impacts of a Sound Gap
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/lifestyle-assessment-results'}
                  >
                    Lifestyle Assessment Results
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/types-of-hearing-loss-two'}
                  >
                    How We Hear
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/hearing-test'}
                  >
                    Hearing Evaluation
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navigationSection">
            <Shelf>
              <Heading medium white>
                Your Solution
              </Heading>
            </Shelf>
            <nav role="navigation">
              <ul className="navigation">
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/hearing-loss'}
                  >
                    Hearing Results
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/audiogram'}
                  >
                    Audiogram
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/types-of-hearing-loss'}
                  >
                    About Your Hearing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/impacts-of-hearing-loss'}
                  >
                    Impacts of a Sound Gap
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/technology-levels'}
                  >
                    Your Best Fit
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/hearing-aid-transition'}
                  >
                    Every Ear is Unique
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/hearing-aid-styles'}
                  >
                    Hearing Aid Styles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={'/accessories'}
                  >
                    Accessories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="isActive"
                    className="navigation-link"
                    to={{
                      pathname: '/appointment-summary',
                      state: { active: 0 }
                    }}
                  >
                    Appointment Summary
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="navigation-link"
                    to={{
                      pathname: '/appointment-summary',
                      state: { active: 1 }
                    }}
                  >
                    Care Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="navigation-link"
                    to={{
                      pathname: '/appointment-summary',
                      state: { active: 2 }
                    }}
                  >
                    Mobile Apps
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navigationSection">
            <ul className="navigation">
              <li>
                <a className="btn-outline" href="/" target="_self">
                  Reset assessment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Navigation;

import React, { useContext } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAuth0 } from '../../auth0/react-auth0-spa';

/**
 * Page Component Imports
 */

/**
 * Start Up Components
 */
import LoadingPage from '../../pages/Loading.page';
import StartPage from '../../pages/StartPage.page';

/**
 * Section 1 Components
 */
import Intro from '../../pages/Intro.page';
import Login from '../../pages/Login.page';
import LifestyleAssessment from '../../pages/LifestyleAssessment.page';
import SelfDescriptor from '../../pages/SelfDescriptor.page';
import FavoriteActivities from '../../pages/FavoriteActivities.page';
import WellnessConcerns from '../../pages/WellnessConcerns.page';
import HealthyLivingGoals from '../../pages/HealthyLivingGoals.page';
import HearingChallenges from '../../pages/HearingChallenges.page';
import LifestyleAssessmentResults from '../../pages/LifestyleAssessmentResults.page';
import HearingTest from '../../pages/HearingTest.page';
import ResultsChallenges from '../../pages/ResultsChallenges.page';
import HearingLossSelector from '../../pages/HearingLossSelector.page';
import AudiogramPage from '../../pages/AudiogramPage.page';
import Story from '../../pages/Story.page';
import HearingAnatomyPage from '../../pages/HearingAnatomy.page';

/**
 * Section 2 Components
 */
import TypesOfHearingLossPage from '../../pages/Section_2/TypesOfHearingLoss.page';
import TypesOfHearingLossPageTwo from '../../pages/Section_2/TypesOfHearingLossTwo.page';
import ImpactsOfHearingLossPage from '../../pages/Section_2/ImpactsOfHearingLoss.page';
import ImpactsOfHearingLossPageTwo from '../../pages/Section_2/ImpactsOfHearingLossTwo.page';
import TechnologyLevelsPage from '../../pages/Section_2/TechnologyLevels.page';
import HearingAidStylesPage from '../../pages/Section_2/HearingAidStyles.page';
import AccessoriesPage from '../../pages/Section_2/Accessories.page';
import AppointmentSummaryPage from '../../pages/Section_2/AppointmentSummary.page';
import HearingAidTransition from '../../pages/HearingAidTransition.page';
import SoundGapPage from '../../pages/SoundGap.page';

/**
 * End Page Component Imports
 */

// Global Context
import assessmentContext from '../../assessmentStore';

// Global Styling
import './container.styles.scss';

function Container({ location }) {
  const { pathname } = location;
  const { loading, isAuthenticated } = useAuth0();
  const { assessmentState } = useContext(assessmentContext);

  if (loading) {
    return <LoadingPage />;
  } else {
    if (isAuthenticated) {
      return (
        <TransitionGroup className="transition-group">
          <CSSTransition
            classNames="page"
            key={pathname}
            timeout={1000}
            unmountOnExit
          >
            <Switch location={location}>
              {/* Section 1 */}
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/"
                render={() => <StartPage provider={assessmentState.provider} />}
              />
              <Route exact path="/intro" component={Intro} />
              <Route
                exact
                path="/lifestyle-assessment"
                component={LifestyleAssessment}
              />
              <Route
                exact
                path="/self-descriptor"
                render={() => (
                  <SelfDescriptor question={assessmentState.assessment[0]} />
                )}
              />
              <Route
                exact
                path="/favorite-activities"
                render={() => (
                  <FavoriteActivities
                    question={assessmentState.assessment[1]}
                  />
                )}
              />
              <Route
                exact
                path="/wellness-concerns"
                render={() => (
                  <WellnessConcerns question={assessmentState.assessment[2]} />
                )}
              />
              <Route
                exact
                path="/healthy-living-goals"
                render={() => (
                  <HealthyLivingGoals
                    question={assessmentState.assessment[3]}
                  />
                )}
              />
              <Route
                exact
                path="/hearing-challenges"
                render={() => (
                  <HearingChallenges question={assessmentState.assessment[4]} />
                )}
              />
              <Route
                exact
                path="/lifestyle-assessment-results"
                render={() => (
                  <LifestyleAssessmentResults
                    completed={assessmentState.assessmentCompleted}
                    questions={assessmentState.assessment}
                    selection={assessmentState.challengeSelection}
                  />
                )}
              />
              <Route
                exact
                path="/lifestyle-assessment-results-challenges"
                render={() => (
                  <ResultsChallenges
                    completed={assessmentState.assessmentCompleted}
                    challengeCompleted={
                      assessmentState.challengeSelection.completed
                    }
                    questions={assessmentState.assessment}
                    selection={assessmentState.challengeSelection}
                  />
                )}
              />
              <Route exact path="/sound-gap" component={SoundGapPage} />
              <Route exact path="/hearing-test" component={HearingTest} />
              <Route
                exact
                path="/hearing-loss"
                component={HearingLossSelector}
              />
              <Route
                exact
                path="/audiogram"
                render={() => (
                  <AudiogramPage
                    currentHearingLoss={assessmentState.hearingLoss.current}
                  />
                )}
              />
              <Route exact path="/your-story" render={() => Story()} />
              <Route
                exact
                path="/hearing-anatomy"
                render={HearingAnatomyPage}
              />
              {/* Section 2 */}
              <Route
                exact
                path="/types-of-hearing-loss"
                render={() => (
                  <TypesOfHearingLossPage
                    current={assessmentState.typesOfHearingLoss.current}
                  />
                )}
              />
              <Route
                exact
                path="/types-of-hearing-loss-two"
                render={() => (
                  <TypesOfHearingLossPageTwo
                    current={assessmentState.typesOfHearingLoss.current}
                  />
                )}
              />
              <Route
                exact
                path="/impacts-of-hearing-loss"
                render={() => (
                  <ImpactsOfHearingLossPage
                    questions={assessmentState.assessment}
                  />
                )}
              />
              <Route
                exact
                path="/impacts-of-hearing-loss-two"
                render={() => (
                  <ImpactsOfHearingLossPageTwo
                    questions={assessmentState.assessment}
                  />
                )}
              />
              <Route
                exact
                path="/technology-levels"
                render={() => (
                  <TechnologyLevelsPage
                    completed={assessmentState.assessmentCompleted}
                    questions={assessmentState.assessment}
                  />
                )}
              />
              <Route
                exact
                path="/hearing-aid-transition"
                component={HearingAidTransition}
              />
              <Route
                exact
                path="/hearing-aid-styles"
                component={HearingAidStylesPage}
              />
              <Route exact path="/accessories" component={AccessoriesPage} />
              <Route
                exact
                path="/appointment-summary"
                render={({ location }) => (
                  <AppointmentSummaryPage
                    data={assessmentState}
                    active={location.state.active}
                  />
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      );
    } else {
      return (
        <TransitionGroup className="transition-group">
          <CSSTransition
            classNames="page"
            key={pathname}
            timeout={1000}
            unmountOnExit
          >
            <Switch location={location}>
              <Route exact path="/login" component={Login} />
              <Route exact path="/:anything">
                <Redirect to="/login" />
              </Route>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      );
    }
  }
}

export default withRouter(Container);

import React from 'react';

const assessmentContext = React.createContext({});

export const AssessmentProvider = assessmentContext.Provider;
export const AssessmentConsumer = assessmentContext.Consumer;
export default assessmentContext;
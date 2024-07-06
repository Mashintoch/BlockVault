import React, { createContext, useContext } from 'react';
import useAnalytics from '../Analytics';

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const logEvent = useAnalytics();

  return (
    <AnalyticsContext.Provider value={logEvent}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useLogEvent = () => {
  return useContext(AnalyticsContext);
};

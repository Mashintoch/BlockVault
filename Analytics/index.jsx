import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-MJH9Y831L4";

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const logEvent = (category, action) => {
    if (category && action) {
      ReactGA.event({ category, action });
    }
  };

  return logEvent;
};

export default useAnalytics;

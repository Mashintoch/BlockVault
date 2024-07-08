import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = "G-MJH9Y831L4";

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(TRACKING_ID);
      window.GA_INITIALIZED = true;
    }
  }, []);

  useEffect(() => {
    if (window.GA_INITIALIZED) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location]);

  const logEvent = (category, action) => {
    if (window.GA_INITIALIZED && category && action) {
      ReactGA.event({ category, action });
    }
  };

  return logEvent;
};

export default useAnalytics;

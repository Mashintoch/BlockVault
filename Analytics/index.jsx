import ReactGA from "react-ga";

const TRACKING_ID = process.env.GOOGLE_TRACKING_ID;

const initializeGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export default initializeGA;

import ReactGA from "react-ga";

export const logPageView = (location: any) => {
  if (!(window as any)["GoogleAnalyticsObject"]) {
    ReactGA.initialize(`${process.env.GA_KEY}`, {
      debug: true
    });
  }

  // console.log("process.env.GA_KEY: ", process.env.GA_KEY);
  // console.log("logPageView", location.pathname + location.search);
  // console.log("pathname: ", location.pathname, " | search: ", location.search);
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
};

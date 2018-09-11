import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize(`${process.env.GA_KEY}`, {
    debug: false
  });
};

export const logPageView = () => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);

  console.log("pageview", location.pathname + location.search);
};

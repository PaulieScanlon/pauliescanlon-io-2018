export const pageview = () => {
  (window as any).gtag("config", `${process.env.GA_KEY}`, {
    page_location: location.pathname + location.search
  });
};

export const pageView = () => {
  // console.log("pageView: process.env.NODE_ENV: ", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    (window as any).gtag("config", `${process.env.GA_KEY}`, {
      page_location: location.pathname + location.search
    });
  }
};

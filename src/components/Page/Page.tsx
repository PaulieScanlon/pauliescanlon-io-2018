import * as React from "react";
import { pageView } from "../../utils/google-analytics";

export class Page extends React.Component<{}> {
  componentDidMount() {
    pageView();
  }
  render() {
    const { children } = this.props;
    return <div className="ga-page=view">{children}</div>;
  }
}

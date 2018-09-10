import * as React from "react";

import {
  postsHandler,
  usersHandler,
  tagsHandler,
  pageListHandler,
  gitHubActivityHandler
} from "../reducers/data-reducers";

import { logPageView } from "../utils/google-analytics";

import { MainWrapper, ContainedWidth, Section, common } from "../styles";

import { Fetcher } from "../components/Fetcher";
import { FlexItem } from "../components/FlexItem";
import { TechTopFive } from "../components/TechTopFive";
import { GitHubActivity } from "../components/GitHubActivity";
import { ContactDetails } from "../components/ContactDetails";
import { Portfolio } from "../components/Portfolio";
import { User } from "../components/User";
import { PageList } from "../components/PageList";

import "../styles/";

import { cms } from "../cms";

class Index extends React.Component<any, any> {
  componentDidMount() {
    logPageView(window.location);
  }

  render() {
    return (
      <MainWrapper>
        <ContainedWidth>
          <Section>
            <FlexItem xs={1} sm={1} md={1} marginBottom={common.flexBottom}>
              <Fetcher
                fetchMethod={{
                  method: "users",
                  query: "1"
                }}
                dataReducer={usersHandler}
                renderComponent={data => <User {...data} />}
              />
            </FlexItem>
          </Section>

          <Section>
            <FlexItem xs={1} sm={2} md={3}>
              <ContactDetails
                leading={cms.contact.leading}
                details={cms.contact.details}
              />
            </FlexItem>

            <FlexItem xs={1} sm={2} md={3}>
              <Fetcher
                fetchMethod={{
                  method: "tags"
                }}
                dataReducer={tagsHandler}
                renderComponent={data => (
                  <TechTopFive
                    leading={cms.tech.leading}
                    trailing={cms.tech.trailing}
                    {...data}
                  />
                )}
              />
            </FlexItem>

            <FlexItem xs={1} sm={2} md={3} marginBottom={common.flexBottom}>
              <Fetcher
                fetchMethod={{
                  method: "gitHubActivity"
                }}
                dataReducer={gitHubActivityHandler}
                renderComponent={data => (
                  <GitHubActivity
                    leading={cms.github.leading}
                    trailing={cms.github.trailing}
                    {...data}
                  />
                )}
              />
            </FlexItem>
          </Section>

          <Section>
            <Fetcher
              fetchMethod={{
                method: "posts"
              }}
              dataReducer={postsHandler}
              renderComponent={data => (
                <Portfolio
                  leading={cms.portfolio.leading}
                  trailing={cms.portfolio.trailing}
                  {...data}
                />
              )}
            />
          </Section>
          <Section>
            <FlexItem xs={1} sm={2} md={2} marginBottom={common.flexBottom}>
              <Fetcher
                fetchMethod={{
                  method: "pageList",
                  query: "companies"
                }}
                dataReducer={pageListHandler}
                renderComponent={data => (
                  <PageList leading={cms.companies.leading} {...data} />
                )}
              />
            </FlexItem>
            <FlexItem xs={1} sm={2} md={2} marginBottom={common.flexBottom}>
              <Fetcher
                fetchMethod={{
                  method: "pageList",
                  query: "awards"
                }}
                dataReducer={pageListHandler}
                renderComponent={data => (
                  <PageList leading={cms.awards.leading} {...data} />
                )}
              />
            </FlexItem>
          </Section>
        </ContainedWidth>
      </MainWrapper>
    );
  }
}

export default Index;

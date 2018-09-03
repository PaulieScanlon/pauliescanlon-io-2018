import * as React from "react";

import {
  postsHandler,
  usersHandler,
  tagsHandler,
  gitHubActivityHandler
} from "../reducers/data-reducers";

import { MainWrapper, ContainedWidth, Section } from "../styles";

import { Fetcher } from "../components/Fetcher";
import { FlexItem } from "../components/FlexItem";
import { TechTopFive } from "../components/TechTopFive";
import { GitHubActivity } from "../components/GitHubActivity";
import { ContactDetails } from "../components/ContactDetails";
import { Portfolio } from "../components/Portfolio";
import { User } from "../components/User";

import "../styles/";

import { cms } from "./cms";

const Index: React.SFC = () => {
  return (
    <MainWrapper>
      <ContainedWidth>
        <Section>
          <FlexItem xs={1} sm={1} md={1}>
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
            <ContactDetails details={cms.contact} />
          </FlexItem>

          <FlexItem xs={1} sm={2} md={3}>
            <Fetcher
              fetchMethod={{
                method: "tags"
              }}
              dataReducer={tagsHandler}
              renderComponent={data => <TechTopFive {...data} />}
            />
          </FlexItem>

          <FlexItem xs={1} sm={2} md={3}>
            <Fetcher
              fetchMethod={{
                method: "gitHubActivity"
              }}
              dataReducer={gitHubActivityHandler}
              renderComponent={data => <GitHubActivity {...data} />}
            />
          </FlexItem>
        </Section>

        <Section>
          <Fetcher
            fetchMethod={{
              method: "posts"
            }}
            dataReducer={postsHandler}
            renderComponent={data => <Portfolio {...data} />}
          />
        </Section>
      </ContainedWidth>
    </MainWrapper>
  );
};

export default Index;

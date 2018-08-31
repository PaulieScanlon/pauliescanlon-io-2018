import * as React from "react";

import {
  postsHandler,
  usersHandler,
  tagsHandler
} from "../reducers/data-reducers";

import { MainWrapper, ContainedWidth, Section } from "../styles";

import { Fetcher } from "../components/Fetcher";

import { TechTopFive } from "../components/TechTopFive";
import { Portfolio } from "../components/Portfolio";
import { User } from "../components/User";

import "../styles/";

const Index: React.SFC = () => {
  return (
    <MainWrapper>
      <ContainedWidth>
        <Section>
          <Fetcher
            fetchMethod={{
              method: "users",
              query: "1"
            }}
            dataReducer={usersHandler}
            renderComponent={data => <User {...data} />}
          />
        </Section>

        <Section>
          <Fetcher
            fetchMethod={{
              method: "tags"
            }}
            dataReducer={tagsHandler}
            renderComponent={data => <TechTopFive {...data} />}
          />

          <Fetcher
            fetchMethod={{
              method: "tags"
            }}
            dataReducer={tagsHandler}
            renderComponent={data => <TechTopFive {...data} />}
          />

          <Fetcher
            fetchMethod={{
              method: "tags"
            }}
            dataReducer={tagsHandler}
            renderComponent={data => <TechTopFive {...data} />}
          />
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

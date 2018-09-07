import * as React from "react";

import { IUserData } from "../../types/data-types";

import { UserWrapper, ActionsGroup, Action, Message } from "./styles";
import { SectionHeader } from "../SectionHeader";
import { ButtonFake, ButtonLink } from "../Button/";
import { P } from "../../styles/typography";

import { cms } from "../../cms";
import { draculaTheme } from "../../styles/theme";

interface IProps {
  userData: IUserData;
}

export const User = ({ userData }: IProps) => {
  const { bio, cvUrl, displayCvUrl, availability, message } = userData;

  let statusStyles = {
    disabled: false,
    backgroundColour: draculaTheme.green
  };
  let statusMessage = cms.user.availableMessage;

  if (availability === "booked") {
    (statusMessage = message),
      (statusStyles = {
        disabled: true,
        backgroundColour: draculaTheme.red
      });
  }

  return (
    <UserWrapper>
      <SectionHeader leading={cms.user.leading} trailing={cms.user.trailing} />
      <P dangerouslySetInnerHTML={{ __html: bio }} />

      <ActionsGroup>
        <Action>
          <ButtonLink
            href={cvUrl}
            target="_blank"
            grow
            backgroundColour={draculaTheme.green}
          >
            {cms.user.cvCta}
          </ButtonLink>
        </Action>
        <Message>
          <span>
            <a href={cvUrl} target="_blank">
              {displayCvUrl}
            </a>
          </span>
        </Message>
      </ActionsGroup>

      <ActionsGroup>
        <Action>
          <ButtonFake grow {...statusStyles}>
            {availability}
          </ButtonFake>
        </Action>
        <Message>
          <span>{statusMessage}</span>
        </Message>
      </ActionsGroup>
    </UserWrapper>
  );
};

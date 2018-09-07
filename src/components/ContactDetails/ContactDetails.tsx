import * as React from "react";

import { SectionHeader } from "../SectionHeader";
import { DescriptionList } from "../DescriptionList";

import { ContactDetailsWrapper, ContactLink } from "./styles";

interface IDetail {
  name: string;
  info: string;
}

interface IProps {
  leading: string;
  details: IDetail[];
}

export const ContactDetails: React.SFC<IProps> = (props: IProps) => {
  const { leading, details } = props;

  const listData = details.map(detail => {
    return {
      term: <span>{detail.name}</span>,
      description: (
        <ContactLink href={detail.info} target="_blank">
          {detail.info}
        </ContactLink>
      )
    };
  });

  return (
    <ContactDetailsWrapper>
      <SectionHeader leading={leading} />
      <DescriptionList data={listData} />
    </ContactDetailsWrapper>
  );
};

import * as React from "react";

import { SectionHeader } from "../SectionHeader";
import { FlexItem } from "../FlexItem";
import { DescriptionList } from "../DescriptionList";

import { ContactLink } from "./styles";

interface IDetails {
  name: string;
  info: string;
}

interface IProps {
  details: IDetails[];
}

export const ContactDetails: React.SFC<IProps> = (props: IProps) => {
  const { details } = props;

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
    <FlexItem xs={1} sm={2} md={3}>
      <SectionHeader leading="contact" trailing="()" />
      <DescriptionList data={listData} />
    </FlexItem>
  );
};

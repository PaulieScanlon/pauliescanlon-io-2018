import * as React from "react";
import Link from "next/link";

import { ISinglePostData } from "../../types/data-types";
import { H2, P } from "../../styles/typography";
import { draculaTheme } from "../../styles/theme";

import {
  FeatureImageWrapper,
  FeatureImage,
  ProjectBodyWrapper,
  ProjectBody
} from "./styles";
import { TagsBlock } from "../TagsBlock";

interface IProps {
  singlePost: ISinglePostData;
}

export const ProjectPage = ({ singlePost }: IProps) => {
  const { title, featureImage, customExcerpt, html, tags } = singlePost;

  return (
    <div>
      <FeatureImageWrapper>
        <FeatureImage backgroundImage={featureImage} />
      </FeatureImageWrapper>

      <ProjectBodyWrapper>
        <ProjectBody>
          <H2>{title}</H2>
          <P>{customExcerpt}</P>
          <P dangerouslySetInnerHTML={{ __html: html }} />
          <TagsBlock tags={tags} />
          <Link
            href={{
              pathname: "/"
            }}
          >
            <a style={{ color: draculaTheme.green }}>Back</a>
          </Link>
        </ProjectBody>
      </ProjectBodyWrapper>
    </div>
  );
};

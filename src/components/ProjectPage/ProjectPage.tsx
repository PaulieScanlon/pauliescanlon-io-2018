import * as React from "react";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${customExcerpt}`} />
        <meta property="og:image" content={`${featureImage}`} />
      </Head>
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

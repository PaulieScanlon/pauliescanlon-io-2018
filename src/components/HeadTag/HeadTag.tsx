import * as React from "react";
import Head from "next/head";

interface IProps {
  title: string;
  ogTitle: string;
  ogImage: string;
  ogDescription: string;
}

export const HeadTag: React.SFC<IProps> = ({
  title,
  ogTitle,
  ogImage,
  ogDescription
}: IProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={ogDescription} />
    </Head>
  );
};

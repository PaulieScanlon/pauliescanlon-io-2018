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
      <title key="title">{title}</title>
      <meta key="og:title" property="og:title" content={ogTitle} />
      <meta key="og:image" property="og:image" content={ogImage} />
      <meta
        key="og:description"
        property="og:description"
        content={ogDescription}
      />
    </Head>
  );
};

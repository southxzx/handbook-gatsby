import { graphql, HeadProps, PageProps } from "gatsby";
import React from "react";
import BackButton from "../../components/BackButton";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import pluralize from "../../utils";

const BlogPost: React.FC<PageProps> = ({ data, children, ...rest }) => {
  const { frontmatter, html, timeToRead, tableOfContents } = (data as any)
    .markdownRemark;
  return (
    <Layout>
      <div className="content-detail">
        <BackButton />
        <h1 className="text-4xl font-medium mb-3">{frontmatter.title}</h1>
        <span className="text-grey font-light text-sm">
          🕑 {frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp; ⌛️ {timeToRead}{" "}
          {pluralize("min", timeToRead)}&nbsp;read
        </span>
        <div
          className="text-lg text-black font-light mt-5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
      }
      html
      timeToRead
      tableOfContents(heading: "")
    }
  }
`;

export const Head: React.FC<HeadProps> = ({ data }) => (
  <Seo title={(data as any).markdownRemark.frontmatter.title} />
);

export default BlogPost;

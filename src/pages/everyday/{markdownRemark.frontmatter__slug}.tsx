import { graphql, HeadProps, Link, PageProps } from "gatsby";
import React from "react";
import BackButton from "../../components/BackButton";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import pluralize from "../../utils";

const BlogPost: React.FC<PageProps> = ({ data, children, ...rest }) => {
  const {
    frontmatter = {},
    html,
    timeToRead,
    tableOfContents,
  } = (data as any).markdownRemark || {};
  return (
    <Layout>
      <div className="content-detail">
        <BackButton href="/everyday" />
        <h1 className="text-4xl leading-[48px] font-medium mb-3 overflow-x-hidden text-ellipsis">
          {frontmatter.title}
        </h1>
        <span className="text-grey font-light text-sm">
          🕑 {frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp; ⌛️ {timeToRead}{" "}
          {pluralize("min", timeToRead)}&nbsp;read
        </span>
        <div
          className="text-lg text-black font-light mt-5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="flex items-center mt-5">
          {frontmatter.tags?.map((tag: string) => (
            <Link
              to={`/everyday/tags#${tag}`}
              key={tag}
              className="text-grey !text-sm font-light mr-2 bg-light hover:text-neutral p-1 px-2 rounded"
            >
              #{tag}
            </Link>
          ))}
        </div>
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
  <Seo
    title={`${(data as any).markdownRemark?.frontmatter?.date} - ${
      (data as any).markdownRemark?.frontmatter?.title
    }`}
  />
);

export default BlogPost;

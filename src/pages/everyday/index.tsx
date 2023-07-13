import { PageProps, Link, graphql } from "gatsby";
import React from "react";

import BackButton from "../../components/BackButton";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const EverydayPage: React.FC<PageProps> = ({ data }) => {
  const posts = (data as any).allMarkdownRemark.edges || [];
  const totalCount = (data as any).allMarkdownRemark.totalCount || 0;
  return (
    <Layout>
      <BackButton href="/" />
      <h1 className="text-4xl font-medium">📕 Everyday</h1>
      <p className="text-xl text-grey font-light mt-5">
        Documenting my daily learning experiences
        <br />
        (though not on a daily basis 😎)
      </p>
      <div className="my-8">
        <div className="flex justify-between mb-4">
          <p className="text-neutral font-light mb-2">
            {`All posts (${totalCount || 0}):`}
          </p>
          <Link
            to="/everyday/tags"
            className="text-neutral hover:text-grey font-light mb-2 cursor-pointer"
          >
            🔖 Categorize by tags
          </Link>
        </div>
        {posts.map((post: any) => {
          const frontmatter = post.node.frontmatter;
          return (
            <div key={frontmatter.slug}>
              <Link
                to={`/everyday/${frontmatter.slug}`}
                className="text-lg hover:text-neutral"
              >
                <span className="text-grey font-light">{frontmatter.date}</span>
                &nbsp;-&nbsp;
                <b>{frontmatter.title}</b>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
          }
          id
          timeToRead
          tableOfContents(heading: "")
        }
      }
      totalCount
    }
  }
`;

export const Head = () => <Seo title="Everyday" />;

export default EverydayPage;

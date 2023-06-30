import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import BackButton from "../../components/BackButton";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const EverydayTags: React.FC<PageProps> = ({ data }) => {
  const tags = (data as any).allMarkdownRemark.distinct || [];
  const tagGroups = (data as any).allMarkdownRemark.group || [];
  return (
    <Layout>
      <div className="everyday-tags">
        <BackButton />
        <h1 className="text-4xl font-medium">🔖 Every-Tags</h1>
        <p className="text-xl text-grey font-light mt-5">
          Still everyday posts but categorized by tags
        </p>
        <div className="flex items-center justify-center flex-wrap my-8">
          {tags?.map((tag: string) => (
            <Link
              key={tag}
              to={`#${tag}`}
              className="text-grey !text-sm font-light mr-2 bg-light hover:text-neutral p-1 mb-2 px-2 rounded"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <div>
          {tagGroups.map((tagGroup: any, index: number) => {
            const { edges, totalCount } = tagGroup;

            return (
              <div key={index} className="mb-4">
                <h2 className="text-xl text-neutral font-normal hover:text-grey">
                  <Link
                    className="tag-element"
                    to={`#${tags[index]}`}
                    id={tags[index]}
                  >{`#${tags[index]}`}</Link>
                  &nbsp;
                  <span className="text-sm text-grey font-thin">{`(${
                    totalCount || 0
                  })`}</span>
                </h2>
                <div className="pl-6">
                  {edges.map((post: any) => {
                    const frontmatter = post.node.frontmatter;
                    return (
                      <div key={frontmatter.slug}>
                        <Link
                          to={`/everyday/${frontmatter.slug}`}
                          className="text-lg hover:text-neutral"
                        >
                          <span className="text-grey font-light">
                            {frontmatter.date}
                          </span>
                          &nbsp;-&nbsp;
                          {frontmatter.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      distinct(field: { frontmatter: { tags: SELECT } })
      group(field: { frontmatter: { tags: SELECT } }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Everyday by Tags" />;

export default EverydayTags;

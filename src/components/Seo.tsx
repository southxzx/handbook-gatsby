import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface Props {
  title?: string;
}

const Seo: React.FC<Props> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <title>{title || data.site.siteMetadata.title}</title>;
};

export default Seo;

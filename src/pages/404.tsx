import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-medium">🤔 404</h1>
        <p className="text-xl text-grey font-light mt-5">
          This page doesn't exist.
        </p>
        <div className="mt-[100px]">
          <Link to="/" className="text-grey font-light">
            ⏪ Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const sections = [
  {
    key: "everyday",
    text: "📕 Everyday Learning",
    description:
      "Documenting my daily learning experiences (though not on a daily basis 😎)",
    href: "/everyday",
  },
  {
    key: "life-within-frames",
    text: "📸 Life Within Frames",
    description:
      "Posting some pictures that I took, mostly about my life in Vietnam (coming soon)",
    href: "/life-within-frames",
  },
  {
    key: "about",
    text: "👨🏼‍💻 About",
    description: "",
    href: "/about",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <div className="flex items-center">
          <StaticImage
            src="../images/avt_2023.jpg"
            width={48}
            height={48}
            alt="profile-picture"
            className="rounded-full mr-3"
          />
          <div>
            <h1 className="text-4xl font-medium colorized">southxzx</h1>
          </div>
        </div>

        <p className="text-xl text-neutral font-light mt-5">
          My name is Nam (Daniel), I&apos;m glad that you found me here.
        </p>
        {/* <BlinkingTextCursor /> */}

        <div className="mt-10">
          {sections.map((section) => (
            <div key={section.key} className="mb-3">
              <Link to={section.href}>
                <p className="text-lg hover:text-neutral">{section.text}</p>
                {section.description && (
                  <p className="ml-6 text-grey font-light">
                    {section.description}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Southxzx's Handbook" />;

export default IndexPage;

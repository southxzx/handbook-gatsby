import { HeadFC } from "gatsby";
import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <BackButton href="/" />
      <h1 className="text-4xl font-medium">👨🏼‍💻 About Me</h1>
      <p className="text-xl text-grey font-light mt-5">
        You don't need to give a shit about me but if you're here I'm so happy
        for that. Cheers!
      </p>
      <p className="mt-8">
        - I am an enthusiastic developer with a primary focus on front-end and
        mobile app development. My expertise lies in working with technologies
        such as ReactJS, React Native, and Flutter.
        <br />- I am deeply passionate about creating exceptional products, and
        I take great pride in contributing to their perfection by paying
        meticulous attention to detail.
        <br />- The intersection of creativity and technology is where I thrive,
        as I believe it is the perfect blend for crafting innovative and
        user-friendly experiences. If I were not a developer, I often find
        myself daydreaming about becoming a film director 🎬.
      </p>

      <div className="mt-8">
        <p>You can found me somewhere here:</p>
        <span>
          - 😼 Github:&nbsp;
          <a
            href="https://github.com/southxzx"
            target="_blank"
            rel="noreferrer"
            className="text-grey font-light"
          >
            https://github.com/southxzx
          </a>
        </span>
        <br />
        <span>
          - 📝 Medium:&nbsp;
          <a
            href="https://medium.com/@southxzx"
            target="_blank"
            rel="noreferrer"
            className="text-grey font-light"
          >
            https://medium.com/@southxzx
          </a>
        </span>
        <br />
        <span>
          - 💼 LinkedIn:&nbsp;
          <a
            href="https://www.linkedin.com/in/southxzx"
            target="_blank"
            rel="noreferrer"
            className="text-grey font-light"
          >
            https://www.linkedin.com/in/southxzx
          </a>
        </span>
        <br />
        <span>
          - 📚 Goodreads:&nbsp;
          <a
            href="https://goodreads.com/southxzx"
            target="_blank"
            rel="noreferrer"
            className="text-grey font-light"
          >
            https://goodreads.com/southxzx
          </a>
        </span>
      </div>

      <p className="mt-8">
        I'm not very active on social media, but I usually indulge in watching
        memes on Instagram.
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="About Me" />;

export default AboutPage;

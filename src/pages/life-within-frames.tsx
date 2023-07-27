import { HeadFC } from "gatsby";
import * as React from "react";
import Seo from "../components/Seo";
import VietNamMaps from "../components/VietNamMaps";

const LifeWithinFramesPage: React.FC = () => {
  return (
    <div className="flex gap-8 w-screen">
      <div className="h-[calc(100vh-48px)] flex-1">
        <VietNamMaps />
      </div>
      <div className="flex-1">Image</div>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Southxzx's Handbook" />;

export default LifeWithinFramesPage;

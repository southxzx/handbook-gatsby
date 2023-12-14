import { HeadFC } from "gatsby";
import * as React from "react";
import Seo from "../components/Seo";
import VietNamMaps from "../components/VietnamMaps";
import BackButton from "../components/BackButton";

import location from "../../_images";

const LifeWithinFramesPage: React.FC = () => {
  return (
    <div className="p-[25.5px] bg-dotted overflow-hidden relative">
      <div className="absolute top-[51px] left-[51px] z-[101]">
        <BackButton />
      </div>
      <div className="flex items-center justify-center border border-light rounded-xl">
        <div className="h-[calc(100vh-51px)] w-full p-[25.5px]">
          <VietNamMaps pinLocations={Object.values(location)} />
        </div>
        {/* <div className="flex-1 p-[25.5px] rounded-e-xl">
          <p className="font-bold text-grey">#PROVINCE</p>
          <div className="w-full h-[calc(100vh-102px)] overflow-y-auto">
            <div className="flex flex-wrap w-full gap-[25.5px]">
              {imgs.map((img) => (
                <div className="w-[calc(50%-12.75px)]" key={img}>
                  <img
                    src={img}
                    alt="example"
                    className="aspect-video rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Life Within Frames" />;

export default LifeWithinFramesPage;

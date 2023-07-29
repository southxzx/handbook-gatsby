import { HeadFC } from "gatsby";
import * as React from "react";
import Seo from "../components/Seo";
import VietNamMaps from "../components/VietnamMaps";

const imgs = [
  "https://c0.wallpaperflare.com/preview/280/30/526/seoul-korea-mac-wallpaper-pc-wallpaper.jpg",
  "https://c1.wallpaperflare.com/preview/286/169/190/neon-person-night-city.jpg",
  "https://c1.wallpaperflare.com/preview/656/797/170/street-photography-neon-night-photography-drone.jpg",
];

const LifeWithinFramesPage: React.FC = () => {
  return (
    <div className="p-[25.5px] bg-dotted overflow-hidden">
      <div className="flex items-center border border-lightGrey rounded-xl">
        <div className="h-[calc(100vh-51px)] p-[25.5px] flex-1 border-r border-lightGrey">
          <VietNamMaps />
        </div>
        <div className="flex-1 p-[25.5px] rounded-e-xl">
          {/* <p className="font-bold text-grey">#PROVINCE</p> */}
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
        </div>
      </div>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Southxzx's Handbook" />;

export default LifeWithinFramesPage;

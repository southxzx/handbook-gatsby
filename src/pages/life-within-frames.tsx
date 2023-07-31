import { HeadFC } from "gatsby";
import * as React from "react";
import Seo from "../components/Seo";
import VietNamMaps from "../components/VietnamMaps";
import BackButton from "../components/BackButton";

const imgs = [
  "https://c0.wallpaperflare.com/preview/280/30/526/seoul-korea-mac-wallpaper-pc-wallpaper.jpg",
  "https://c1.wallpaperflare.com/preview/286/169/190/neon-person-night-city.jpg",
  "https://c1.wallpaperflare.com/preview/656/797/170/street-photography-neon-night-photography-drone.jpg",
];

const getExactLocation = (x: number, y: number) => {
  return {
    x: x + 51,
    y: y + 51,
  };
};

function convertLatLngToPixel(
  latitude: number,
  longitude: number,
  zoom: number
) {
  const TILE_SIZE = 256; // Tile size used in Web Mercator projection
  const earthRadius = 6378137; // Earth's radius in meters

  const latRad = (latitude * Math.PI) / 180;
  const x = ((longitude + 180) / 360) * TILE_SIZE * Math.pow(2, zoom);
  const y =
    (0.5 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / (2 * Math.PI)) *
    TILE_SIZE *
    Math.pow(2, zoom);

  return { x, y };
}

// Example usage:
const latitude = 37.7749; // Latitude
const longitude = -122.4194; // Longitude
const zoomLevel = 12; // Zoom level of the map

const pixelPosition = convertLatLngToPixel(latitude, longitude, zoomLevel);

const LifeWithinFramesPage: React.FC = () => {
  return (
    <div className="p-[25.5px] bg-dotted overflow-hidden relative">
      <div className="absolute top-[51px] left-[51px] z-[101]">
        <BackButton />
      </div>
      <div className="flex items-center justify-center border border-light rounded-xl">
        <div className="h-[calc(100vh-51px)] p-[25.5px]">
          <VietNamMaps
            pinLocations={[
              {
                lat: 16.265227,
                lng: 107.430101,
                key: "HUẾ",
              },
              {
                lat: 16.074821,
                lng: 107.829735,
                key: "DA_NANG",
              },
              {
                lat: 15.782616,
                lng: 108.028148,
                key: "HOI_AN",
              },
              {
                lat: 14.1264939,
                lng: 108.853972,
                key: "ĐỀ_GI",
              },
            ]}
          />
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

export const Head: HeadFC = () => <Seo title="Southxzx's Handbook" />;

export default LifeWithinFramesPage;

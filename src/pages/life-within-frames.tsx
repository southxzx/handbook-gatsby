import { HeadFC } from "gatsby";
import * as React from "react";
import Seo from "../components/Seo";
import VietNamMaps from "../components/VietnamMaps";
import BackButton from "../components/BackButton";

const LifeWithinFramesPage: React.FC = () => {
  return (
    <div className="p-[25.5px] bg-dotted overflow-hidden relative">
      <div className="absolute top-[51px] left-[51px] z-[101]">
        <BackButton />
      </div>
      <div className="flex items-center justify-center border border-light rounded-xl">
        <div className="h-[calc(100vh-51px)] w-full p-[25.5px]">
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
              {
                lat: 12.6805937,
                lng: 108.0350447,
                key: "BUON_MA_THUOT",
                images: [
                  {
                    url: "https://i.imgur.com/tAkvCW2.jpg",
                    title: "Một góc bảo tàng cà phê Tp. BMT",
                  },
                  {
                    url: "https://i.imgur.com/IeXta3w.jpeg",
                    title: "Tranh các loại cà phê trên thế giới",
                  },
                  {
                    url: "https://i.imgur.com/bkGUNX2.jpeg",
                    title: "Các máy xay cà phê",
                  },
                  {
                    url: "https://i.imgur.com/TnUevAy.jpeg",
                    title: "Máy này nhìn hơi 'nguyên thuỷ'",
                  },
                  {
                    url: "https://i.imgur.com/ZlH05rh.jpeg",
                    title: "Mẫu hạt cà phê được trưng bày",
                  },
                  {
                    url: "https://i.imgur.com/Mxz5wT7.jpeg",
                    title: "Một góc của toà nhà bảo tàng",
                  },
                ],
              },
              {
                lat: 12.9048279,
                lng: 109.1413666,
                key: "VUNG_RO",
              },
              {
                lat: 13.204981,
                lng: 109.048711,
                key: "PHÚ_YÊN",
                images: [
                  {
                    url: "https://i.imgur.com/cq8IbaN.jpeg",
                    title: "Biển đêm gần tháp Nghinh Phong",
                  },
                  {
                    url: "https://i.imgur.com/CmwyMpf.jpeg",
                    title: "Chụp tháp Nginh Phong từ bãi biển",
                  },
                  {
                    url: "https://i.imgur.com/QTsWpw5.jpeg",
                    title: "Chụp tháp Nginh Phong từ bãi biển (ngang)",
                  },
                  {
                    url: "https://i.imgur.com/IyiSyax.jpeg",
                    title: "Biển sáng sớm gần chỗ homestay 😅",
                  },
                  {
                    url: "https://i.imgur.com/9Pa042o.jpeg",
                    title: "Bàn của quán ăn trên bãi biển",
                  },
                  {
                    url: "https://i.imgur.com/i3yP586.jpeg",
                    title: "Đi lội sóng với bạn mình 😎",
                  },
                  {
                    url: "https://i.imgur.com/WlH8dx1.jpeg",
                    title: "Nắng xuyên qua lớp mây mù sáng sớm",
                  },
                ],
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

export const Head: HeadFC = () => <Seo title="Life Within Frames" />;

export default LifeWithinFramesPage;

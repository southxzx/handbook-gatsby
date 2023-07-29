import React, { useEffect } from "react";
import vietnam_paths from "../../utils/vietnam";
import Province from "./Province";
import useMouse from "../../hooks/useMouse";
import useHover from "../../hooks/useHover";

const VietNamMaps: React.FC = () => {
  const actives = ["DAKLAK", "DAKNONG", "PHUYEN", "KHANHHOA", "BINHDUONG"];
  const [rect, setRect] = React.useState<DOMRect | null>(null);
  const [provinceKey, setProvinceKey] = React.useState<string>("");

  const { x, y } = useMouse();

  const onHovered = (
    _rect: DOMRect,
    _provinceKey: string,
    _isHovered: boolean
  ) => {
    if (!_isHovered) {
      const elements = document.elementsFromPoint(_rect.left, _rect.top);
      console.log(
        "🚀 ~ file: index.tsx:22 ~ isProvinceExisted(elements):",
        elements
      );
      if (!isProvinceExisted(elements)) {
        setRect(null);
        setProvinceKey("");
      }
    }
    setRect(_rect);
    setProvinceKey(_provinceKey);
  };

  const isProvinceExisted = (els: Element[]) => {
    return els.some((el) => el.tagName === "path");
  };

  return (
    <div className="relative h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 388.614 540.548"
        className="h-full w-fit mx-auto"
      >
        <g id="_2022">
          {Object.entries(vietnam_paths).map(([key, value]) => {
            // HOANGSA-TRUONGSA
            if (Array.isArray(value)) {
              return (
                <g key={key}>
                  {value.map((v) => {
                    return <Province key={v} d={v} />;
                  })}
                </g>
              );
            } else {
              const isActive = actives.includes(key);
              return (
                <Province
                  isVisited={isActive}
                  key={key}
                  id={key}
                  d={value}
                  onHovered={onHovered}
                />
              );
            }
          })}
        </g>
      </svg>
      {rect && (
        <div
          className="rounded-md border border-light shadow-sm w-max p-3 bg-[#ffffff]"
          style={{
            position: "absolute",
            top: y - 40,
            left: x - 40,
            // border: "1px solid #000",
            // zIndex: 100,
          }}
        >
          <p className="text-grey text-sm font-bold">#{provinceKey}</p>
        </div>
      )}
    </div>
  );
};

export default VietNamMaps;

import React, { SVGProps, memo, useEffect } from "react";
import useHover from "../../hooks/useHover";

interface IProvinceProps extends SVGProps<SVGPathElement> {
  isVisited?: boolean;
  onHovered?: (rect: DOMRect, provinceKey: string) => void;
}

const Province: React.FC<IProvinceProps> = ({
  isVisited,
  onHovered,
  ...rest
}) => {
  const { ref, isHovered } = useHover();
  useEffect(() => {
    if (ref.current && isHovered) {
      const rect = ref.current.getBoundingClientRect();
      onHovered?.(rect, rest.id || "");
    }
  }, [isHovered]);

  return (
    <path
      {...rest}
      ref={ref}
      style={{
        fill: isVisited ? "#C0FFD9" : "#dfdfdf",
        stroke: "#bfbfbf",
        strokeMiterlimit: 2,
        strokeWidth: "0.75px",
        cursor: "pointer",
      }}
      className={`${
        isVisited ? "hover:!fill-[#9DFCBF]" : "hover:!fill-[#cfcfcf]"
      } hover:!fill-[#9DFCBF] transition-colors duration-300`}
    />
  );
};

export default memo(Province, (prev, next) => true);

// Currently set to true to prevent re-rendering.
// TODO: Figure out why it's re-rendering.

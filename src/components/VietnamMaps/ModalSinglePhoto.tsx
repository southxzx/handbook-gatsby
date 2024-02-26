import React from "react";
import { IImage } from "../../types/image";
import useClickOutside from "../../hooks/useClickOutside";

interface Props {
  open: boolean;
  onClose: () => void;
  image: IImage;
}

const ModalSinglePhoto: React.FC<Props> = ({ open, image, onClose }) => {
  const ref = useClickOutside(onClose);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-200 rounded-lg z-[200] w-[80%] h-[80%]"
      ref={ref}
    >
      <img
        src={image.url}
        alt={image.title}
        width={220}
        height={220}
        className="w-full h-full max-w-md object-contain"
      />
    </div>
  );
};

export default ModalSinglePhoto;

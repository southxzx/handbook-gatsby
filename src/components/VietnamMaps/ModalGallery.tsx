import React, { useEffect } from "react";
import { useKeyPress } from "../../hooks/useKeyPress";

import "./styles/ModalGallery.scss";
import XSquare from "../../images/svgs/XSquare";

interface IModalProps {
  open?: boolean;
  onClose?: () => void;
  images: Array<{
    url: string;
    title: string;
  }>;
  pinId?: string;
}

const Modal: React.FC<IModalProps> = ({
  open = false,
  onClose,
  images,
  pinId,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const imageBasedClass =
    "object-contain rounded-lg mx-auto border-[2px] border-neutral duration-700 absolute max-w-full max-h-full";
  const imageSlidePrev = " left-[-50%] top-0 opacity-0 scale-50";
  const imageSlideNext = " left-[50%] top-0 opacity-0 scale-50";
  const imageSlideCurrent = " scale-100 left-0 right-0 opacity-1";

  useKeyPress(() => onPrev(), ["ArrowLeft"]);
  useKeyPress(() => onNext(), ["ArrowRight"]);

  const onNext = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const onPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 duration-300 backdrop-blur-sm z-[199]" />
      {open ? (
        <div
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8
        duration-200 rounded-lg z-[200] w-[80%] h-[80%]"
        >
          <div className="max-w-[668px] max-h-[700px] mx-auto relative">
            <div className="w-full text-right">
              <button className="hover:opacity-75" onClick={onClose}>
                <XSquare/>
              </button>
            </div>
            <div className="flex justify-between pb-2">
              {/* <p className="font-normal text-[16px] leading-6 text-neutral">
                {`${activeIndex + 1} / ${images?.length} - #${pinId}`}
              </p> */}
              {/* {images.length > 0 && (
                <p className="font-normal text-[16px] leading-6 text-neutral">
                  {images[activeIndex].title}
                </p>
              )} */}
            </div>
            <div className="w-full flex items-start justify-start gap-1 flex-wrap">
              {images.length > 0 ? (
                images.map((item, index) => {
                  return (
                    <div className="image_square">
                      <img
                        key={index}
                        src={item.url}
                        alt={item.title}
                        width={220}
                        height={220}
                      />
                    </div>
                  );
                })
              ) : (
                <span className="text-base text-center">
                  No available images
                </span>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

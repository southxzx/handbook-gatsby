import React from "react";
import XSquare from "../../images/x-square.svg";
import ChevronLeft from "../../images/chevron-left.svg";
import ChevronRight from "../../images/chevron-right.svg";
import { useKeyPress } from "../../hooks/useKeyPress";

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
    "object-contain rounded-lg mx-auto border border-neutral duration-700 border-dashed absolute";
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
          <div className="max-w-[920px] h-full mx-auto">
            <div className="flex justify-between">
              <p className="font-normal text-[16px] leading-6 text-neutral">
                {`${activeIndex + 1} / ${images?.length} - #${pinId}`}
              </p>
              {images.length > 0 && (
                <p className="font-normal text-[16px] leading-6 text-neutral">
                  {images[activeIndex].title}
                </p>
              )}
            </div>
            <div className="relative h-full w-full flex items-center justify-center">
              {images.length > 0 ? (
                images.map((item, index) => {
                  return (
                    <>
                      <img
                        key={index}
                        src={item.url}
                        alt={item.title}
                        className={
                          imageBasedClass +
                          (index === activeIndex
                            ? imageSlideCurrent
                            : index > activeIndex
                            ? imageSlideNext
                            : imageSlidePrev)
                        }
                      />
                    </>
                  );
                })
              ) : (
                <span className="text-base text-center">
                  No available images
                </span>
              )}
            </div>
          </div>
          <button className="absolute top-[50%] left-2" onClick={onPrev}>
            <ChevronLeft />
          </button>
          <button className="absolute top-[50%] right-2" onClick={onNext}>
            <ChevronRight />
          </button>
          <button
            className="absolute bottom-[-12px] right-[50%] flex items-center gap-1"
            onClick={onClose}
          >
            <XSquare />{" "}
            {/* <span className="leading-6 text-base text-grey">close</span> */}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

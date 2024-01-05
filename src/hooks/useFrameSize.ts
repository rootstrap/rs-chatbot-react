import { useContext, useState } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { IS_MOBILE, MAX_FRAME_WIDTH } from "@/constants";

export const useFrameSize = () => {
  const { open, chatbotRef } = useContext(ChatbotContext);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setFrameSize = () => {
    let frameHeight = chatbotRef?.current?.offsetHeight || 0;
    let frameWidth = chatbotRef?.current?.offsetWidth || 0;

    if (open) {
      if (IS_MOBILE) {
        frameWidth = window.innerWidth;
      }

      if (!IS_MOBILE && window.innerWidth > MAX_FRAME_WIDTH) {
        frameWidth = MAX_FRAME_WIDTH;
      }

      if (frameHeight > window.innerHeight) {
        frameHeight = window.innerHeight;
      }
    }

    setWidth(frameWidth);
    setHeight(frameHeight);
  };

  return {
    width,
    height,
    setFrameSize,
  };
};

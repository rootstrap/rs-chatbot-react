import { useCallback, useContext, useEffect, useState } from "react";
import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";
import { QueryClientProvider } from "react-query";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { ChatbotContext } from "@/context/ChatbotContext";
import { useFrameSize } from "@/hooks/useFrameSize";
import { queryClient } from "@/queries/queryClient";
import { Chatbot } from "@/components/Chatbot";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";
import { IS_MOBILE } from "./constants";

function App() {
  const [insideIframe, setInsideIframe] = useState(false);

  const { open, setToken, token } = useContext(ChatbotContext);
  const { width, height, setFrameSize } = useFrameSize();

  const onVerify = useCallback(
    (googleToken: string) => {
      if (token === "") {
        setToken(googleToken);
      }
    },
    [token, setToken]
  );

  useEffect(() => {
    window.addEventListener("resize", setFrameSize);
    return () => window.removeEventListener("resize", setFrameSize);
  }, [setFrameSize]);

  useEffect(() => {
    document.body.style.overflow =
      open && insideIframe && IS_MOBILE ? "hidden" : "auto";
  }, [open, insideIframe, width]);

  return (
    <Frame
      width={width}
      height={height}
      open={open}
      onMouseEnter={() => {
        setInsideIframe(true);
      }}
      onMouseLeave={() => {
        setInsideIframe(false);
      }}
    >
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
              <GoogleReCaptchaProvider
                reCaptchaKey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
                container={{
                  element: "rs-chatbot-recaptcha",
                  parameters: {},
                }}
              >
                <GoogleReCaptcha onVerify={onVerify} />
              </GoogleReCaptchaProvider>
              <Chatbot setFrameSize={setFrameSize} />
            </QueryClientProvider>
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;

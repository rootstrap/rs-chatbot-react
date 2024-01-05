import { createMessage } from "@/utils";

import { MessageRoles, UserNames } from "./enums";

export const CHATBOT_NAME = import.meta.env.VITE_CHATBOT_NAME;
export const CHATBOT_AGENT_ID = Number(import.meta.env.VITE_AGENT_ID);

export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
};

export const MAX_FRAME_WIDTH = 480;

export const USERNAMES = {
  [MessageRoles.USER]: UserNames.USER,
  [MessageRoles.ASSISTANT]: UserNames.ASSISTANT,
  [MessageRoles.LOADER]: UserNames.ASSISTANT,
};

export const ERRORS = {
  GET_MESSAGE:
    "I'm sorry, I can't provide a response at the moment. Please try again later 🙏",
  SEND_MESSAGE: "We couldn't send your message. Please, try again.",
  RECAPTCHA_VERIFICATION: "We couldn't verify your humanity. Please, try again.",
};

export const ERROR_MESSAGES = {
  messages: [createMessage(ERRORS.GET_MESSAGE)],
};

export const SESSION = {
  REFETCH_LAST_MESSAGE: "refetchLastMessage",
  CONVERSATION_ID: "conversationId",
};

export const REFETCH_INTERVAL = 5000;

export const IS_MOBILE = window.innerWidth < BREAKPOINTS.TABLET;

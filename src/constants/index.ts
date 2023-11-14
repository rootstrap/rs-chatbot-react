import { MessageRoles } from "@/types";

export const CHATBOT_NAME = import.meta.env.VITE_CHATBOT_NAME;

export const BREAKPOINTS = {
  TABLET: 768,
};

export const MAX_FRAME_WIDTH = 600;

enum UserNames {
  USER = "You",
  ASSISTANT = import.meta.env.VITE_CHATBOT_USERNAME,
}

export const USERNAMES = {
  [MessageRoles.USER]: UserNames.USER,
  [MessageRoles.ASSISTANT]: UserNames.ASSISTANT,
  [MessageRoles.LOADER]: UserNames.ASSISTANT,
};

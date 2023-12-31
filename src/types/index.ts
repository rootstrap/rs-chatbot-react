import { MessageRoles } from "@/constants/enums";

export type Agent = {
  id: number;
  name: string;
  description: string;
  trainingData: string;
  createdAt: Date;
  welcomeMessage: string;
  apiKey: string;
};

export type Message = {
  id?: number;
  conversationId?: number;
  content: string;
  role: MessageRoles;
  createdAt: Date;
  errorMessage?: string;
};

export type Conversation = {
  id: number;
  token: string;
  messages: Message[];
  createdAt: Date;
};

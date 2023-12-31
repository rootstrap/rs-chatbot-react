import { useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { CHATBOT_AGENT_ID, REFETCH_INTERVAL, SESSION } from "@/constants";
import { Queries } from "@/constants/enums";
import { ChatbotContext } from "@/context/ChatbotContext";
import { getAgents } from "@/services/agents";
import {
  ConversationResponse,
  createConversation,
} from "@/services/conversations";
import { getMessages, sendMessage } from "@/services/messages";
import { RecaptchaResponse, verifyRecaptcha } from "@/services/recaptchas";

import { queryClient } from "./queryClient";

export const useGetAgent = () => {
  const { data, error } = useQuery([Queries.agents], getAgents);

  const agent = data?.agents.find((agent) => agent.id === CHATBOT_AGENT_ID);

  return {
    agent,
    error,
  };
};

export const useCreateConversation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: ConversationResponse) => void;
  onError: (error: Error) => void;
}) => {
  return useMutation(createConversation, { onSuccess, onError });
};

export const useCreateRecaptcha = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: RecaptchaResponse) => void;
  onError: (error: Error) => void;
}) => {
  return useMutation(verifyRecaptcha, { onSuccess, onError });
};

export const useGetMessages = (conversationId?: number, agentId?: number) => {
  const { data, isLoading } = useQuery(
    [Queries.messages, conversationId],
    () => getMessages({ conversationId, agentId }),
    {
      enabled: !!(agentId && conversationId),
      refetchInterval:
        !!sessionStorage.getItem(SESSION.REFETCH_LAST_MESSAGE) &&
        REFETCH_INTERVAL,
    }
  );

  return {
    messages: data?.messages || [],
    isLoading,
  };
};

export const useSendMessage = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { conversationId } = useContext(ChatbotContext);

  return useMutation(sendMessage, {
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [Queries.messages, conversationId],
      });
    },
    onError,
  });
};

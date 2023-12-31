import styled from "styled-components";

import { COLORS } from "@/constants/colors";

export const Chatbot = styled.div`
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  width: 100%;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 250ms;
`;

export const Header = styled.div`
  align-items: center;
  background: ${COLORS.GREY.DARKER};
  border-radius: inherit;
  display: flex;
  justify-content: space-between;
  min-height: 4.75rem;
  padding: 1.25rem 1.875rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Status = styled.div`
  background: ${COLORS.GREEN};
  border-radius: 100%;
  flex-shrink: 0;
  height: 0.75rem;
  width: 0.75rem;
`;

export const Title = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  margin-left: 1rem;
`;

export const MinimizeButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

export const MinimizeIcon = styled.img`
  width: 1.875rem;
`;

export const Main = styled.div`
  background: ${COLORS.WHITE};
  height: 24rem;
  overflow-y: auto;
  padding: 1.5rem 1.5rem 0 1.5rem;

  @media (min-device-height: 901px) {
    height: 30rem;
  }
`;

export const Footer = styled.form`
  background: ${COLORS.WHITE};
  border-top: 1px solid ${COLORS.GREY.LIGHT};
  display: flex;
`;

export const Input = styled.input`
  border: 0;
  border-radius: 0;
  font-size: 1rem;
  padding: 1.5rem 1.25rem;
  width: 100%;

  &::placeholder {
    color: ${COLORS.GREY};
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;

  &:disabled {
    cursor: initial;
    opacity: 0.43;
  }
`;

export const SendIcon = styled.img`
  width: 1.5rem;
`;

export const Disclaimer = styled.span`
  font-size: 0.60rem;
  font-weight: 500;
  color: ${COLORS.GREY.LIGHT};
  background: ${COLORS.WHITE};
  text-align: center;
  padding: 0.5rem;
`;
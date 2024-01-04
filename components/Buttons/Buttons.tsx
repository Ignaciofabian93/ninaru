import React from "react";
import { Button } from "@nextui-org/react";

interface ButtonProps {
  text: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export const SecondaryButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

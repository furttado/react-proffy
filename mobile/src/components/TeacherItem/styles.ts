import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
  padding: 5%;
  margin: 5%;
  border-radius: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContent = styled.Text`
  margin-top: 20;
  text-align: justify;
  font-size: 15;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const Price = styled.Text`
  margin-top: 20;
  text-align: center;
  font-size: 17;
`;

export const Strong = styled.Text`
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  font-size: 30;
  font-weight: bold;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background-color: red;
  margin-right: 20;
  padding: 3%;
  border-radius: 5px;
  align-items: center;
`;

export const Course = styled.Text``;
export const Bio = styled.Text``;

export const WhatsAppIcon = styled.Image``;

import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
  padding: 5%;
  margin: 5%;
  border-radius: 10px;
`;
//  border-radius: 0.8rem;

export const Header = styled.View`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
`;

export const Content = styled.View``;
export const Strong = styled.Text`
  color: ${({ theme }) => theme.colors.primaryLight};
`;
export const Course = styled.Text``;
export const Bio = styled.Text``;

export const Footer = styled.View``;
export const Price = styled.Text``;
export const Button = styled.TouchableOpacity``;
export const WhatsAppIcon = styled.Image``;

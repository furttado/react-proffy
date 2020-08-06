import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";
import landingImg from "../../assets/images/landing.png";

export default function Teach() {
  return (
    <View>
      <Image source={landingImg} />
    </View>
  );
}

import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import landingImg from "../../assets/images/landing.png";

export default function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Wellcome, {"\n"}
        <Text style={styles.titleBold}>What would you like to do?</Text>
      </Text>
    </View>
  );
}

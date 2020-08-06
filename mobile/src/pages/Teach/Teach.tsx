import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";

export default function Teach() {
  const { goBack } = useNavigation();

  function handleNavigationBack() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassesBgImage} style={styles.content} resizeMode="contain">
        <Text style={styles.title}>Would you like to be a Proffy?</Text>
        <Text style={styles.description}>
          To start, you need to register as a teacher on our web platform.
        </Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={handleNavigationBack}>
        <Text style={styles.okButtonText}>Ok</Text>
      </RectButton>
    </View>
  );
}
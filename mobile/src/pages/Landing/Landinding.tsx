import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

export default function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClssesPage() {
    navigate("Teach");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Wellcome, {"\n"}
        <Text style={styles.titleBold}>What would you like to do?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Learn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNavigateToGiveClssesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        Total of 285 connections already made {" " /**/}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

/**
 <RectButton
          onPress={handleNavigateToGiveClssesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
 */

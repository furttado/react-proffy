import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

export default function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title={"Available Proffys"} />
      <TeacherItem />
    </View>
  );
}

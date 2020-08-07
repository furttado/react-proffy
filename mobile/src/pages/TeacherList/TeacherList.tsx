import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { ScrollView } from "react-native-gesture-handler";
import { useLinkProps } from "@react-navigation/native";

export default function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title={"Available Proffys"}></PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16 }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

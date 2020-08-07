import React from "react";
import { View, Image, ScrollView } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title={"Your favorites Proffys"} />
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

import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { ScrollView, TextInput, BorderlessButton } from "react-native-gesture-handler";
import { useLinkProps } from "@react-navigation/native";

export default function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  return (
    <View style={styles.container}>
      <PageHeader
        title={"Available Proffys"}
        headerRight={
          <BorderlessButton onPress={() => setIsFiltersVisible(!isFiltersVisible)}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Course</Text>
            <TextInput
              value={""}
              onChangeText={() => ""}
              style={styles.input}
              placeholder="Pick a course"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week day</Text>
                <TextInput
                  value={""}
                  onChangeText={() => ""}
                  style={styles.input}
                  placeholder="Pick a week day"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  value={""}
                  onChangeText={() => ""}
                  style={styles.input}
                  placeholder="Pick a time"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
          </View>
        )}
      </PageHeader>
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

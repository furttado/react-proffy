import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { ScrollView, TextInput, BorderlessButton, RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

export default function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  const [teachers, setTeachers] = useState([]);
  const [course, setCourse] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function handleFilterSubmit() {
    try {
      const response = await api.get("classes", {
        params: {
          course,
          week_day,
          time,
        },
      });
      console.log(response.data);
      setTeachers(response.data);
    } catch (err) {
      console.error(err);
    }
  }

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
              value={course}
              onChangeText={(text) => setCourse(text)}
              style={styles.input}
              placeholder="Pick a course"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week day</Text>
                <TextInput
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Pick a week day"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  style={styles.input}
                  placeholder="Pick a time"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16 }}
      >
        {teachers.map((teacher) => (
          <TeacherItem />
        ))}
      </ScrollView>
    </View>
  );
}

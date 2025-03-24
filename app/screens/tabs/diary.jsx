import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { createContext, useState, useContext } from "react";
import Back from "../../../components/Back";
import { Ionicons } from "@expo/vector-icons";

const DiaryContext = createContext();

export default function DiaryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require("../../../assets/images/Diary.png")}
            style={styles.image}
          />
          <Text style={styles.title}>New diary entry</Text>
        </View>
        <Back style={styles.back} />
      </View>
      <Text style={styles.text}>Location of vacation</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>Banner image</Text>
      <Pressable style={styles.imageAdd}>
        <Ionicons name="add-outline" size={40} color="black" />
      </Pressable>
      <Text style={styles.text}>Duration</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>Diary entry</Text>
      <TextInput style={styles.inputDiary} />
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 55,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "800",
    fontSize: 18,
  },
  input: {
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 52,
    shadowColor: "rgba(186, 186, 186, 0.6)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 16.8,
    elevation: 5,
    padding: 20,
    marginBottom: 10,
  },
  inputDiary: {
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 52,
    shadowColor: "rgba(186, 186, 186, 0.6)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 16.8,
    elevation: 5,
    paddingHorizontal: 20,
    height: 150,
    marginBottom: 20,
  },
  imageAdd: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonWrapper: {
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#000",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.07,
  },
});

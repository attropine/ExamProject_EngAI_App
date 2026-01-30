import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Англійська з AI помічником</Text>

      <View style={styles.box}>
        <Text style={styles.label}>Студент:</Text>
        <Text style={styles.text}>Рожкова Анастасія</Text>

        <Text style={styles.label}>Група:</Text>
        <Text style={styles.text}>СПР311</Text>

        <Text style={styles.label}>Вік:</Text>
        <Text style={styles.text}>21</Text>

        <Text style={styles.label}>Призначення роботи:</Text>
        <Text style={styles.text}>
          Додаток для вивчення англійських слів та перекладу тексту
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1525",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "#E6D9FF",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold"
  },

  box: {
    backgroundColor: "#2A1F3A",
    padding: 18,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#5C3D7D",
  },

  label: {
    color: "#9D7BC9",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10
  },

  text: {
    color: "#E6D9FF",
    fontSize: 16,
    marginBottom: 6
  },
});
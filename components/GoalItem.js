import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ item, deleteGoal }) {
  const { id, text } = item.item;
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteGoal(id)}
        android_ripple={{ color: "red" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#311b6b",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "silver",
    borderWidth: 0.5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 5,
  },
});

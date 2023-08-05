import isEmpty from "lodash.isempty";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({ addGoalHandler, showAddModal, setShowAddModal }) {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoal() {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
    setShowAddModal(false);
  }
  return (
    <Modal visible={showAddModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          value={enteredGoal}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          autoFocus
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoal}
              disabled={isEmpty(enteredGoal)}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={setShowAddModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "90%",
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    width: "90%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
    alignItems: "center",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
export default GoalInput;

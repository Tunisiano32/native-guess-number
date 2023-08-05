import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoal,
        id: Math.random().toString(),
      },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals.filter((goal) => goal.id !== id),
    ]);
  }

  return (
    <>
      <StatusBar style="white" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setShowAddModal(true)}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(item) => (
              <GoalItem item={item} deleteGoal={deleteGoalHandler} />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    gap: 5,
  },

  goalsContainer: {
    flex: 5,
  },
});

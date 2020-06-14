import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import CounterContainer from "./CountersContainer";
import FloatingButton from "../_Shared/FloatingButton";

//Redux
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/Selectors";

export default function TasksContainer(props) {
  //const [tasks, setTasks] = useState([]);

  //Redux on prend le state depuis redux
  const tasks = useSelector(getTasks);

  const [isFormOpened, setIsFormOpened] = useState(false);

  // const onAddTask = (title) => {
  //   const newTask = {
  //     id: new Date().getTime(),
  //     title: title,
  //     completed: false,
  //   };
  //   setTasks([newTask, ...tasks]);
  // };

  const onChangeStatus = (id) => {
    // let newTasks = [];
    // tasks.forEach((task) => {
    //   if (task.id === id) {
    //     newTasks.push({
    //       id: id,
    //       title: task.title,
    //       completed: !task.completed,
    //     });
    //   } else {
    //     newTasks.push(task);
    //   }
    // });
    // setTasks(newTasks);
  };

  const onDeleteTask = (id) => {
    // let newTasks = [];
    // tasks.forEach((task) => {
    //   if (task.id !== id) {
    //     newTasks.push(task);
    //   }
    // });
    // setTasks(newTasks);
  };

  const getTasksCompleted = () => {
    let counter = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });
    //console.log("counter", counter);
    return counter;
  };

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && (
        <TaskForm
        //onAddTask={onAddTask}
        />
      )}
      <CounterContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()} //ici on met une arrow parce qu'il nous renvoie quelquechose (return)
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeleteTask={onDeleteTask}
      />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //On rempli le reste de l'espace (sous le header) au max
    position: "relative", //Pour que le floatingButton ait une position absolue
  },
});

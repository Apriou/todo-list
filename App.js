import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Header from "./components/_Shared/Header/Header";
import TasksContainer from "./components/TasksEpic/TasksContainer";
//Pour Redux
import { Provider } from "react-redux";
import store from "./redux/Store";

export default function App() {
  //On utilise SafeAreaView pour qu'il ne se retrouve pas en haut de la
  //barre de status en haut du telephone (marche que pour ios)
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TasksContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./ActionsType";

//action {type: ADD_TASK, payload: data}
export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title: title, //ou title tout simplement
    completed: false,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

import { GetterTree } from "vuex";
import { State, TodoItem } from "./state";

export type Getters = {
  completedCount(state: State): number;
  totalCount(state: State): number;
  todoList(state: State): Array<TodoItem>;
};

export const getters: GetterTree<State, State> & Getters = {
  completedCount(state) {
    return state.items.filter((i) => i.completed).length;
  },
  totalCount(state) {
    return state.items.length;
  },
  todoList(state: State): TodoItem[] {
    return state.items;
  },
};

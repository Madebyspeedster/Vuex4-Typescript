import { ActionContext } from "vuex";
import { MutationType } from "./mutations";
import { State, TodoItem } from "./state";
import { GenericAction } from "./types";

export enum ActionTypes {
  GetTodoItems = "GET_ITEMS",
}

type Actions = {
  [ActionTypes.GetTodoItems](
    context: ActionContext<State, State>,
    payload: GenericAction<TodoItem>
  ): void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: Actions = {
  async [ActionTypes.GetTodoItems]({ commit }) {
    commit(MutationType.SetLoading, true);
    await sleep(300);
    commit(MutationType.SetLoading, false);
    commit(MutationType.SetItems, [
      {
        id: 1,
        text: "Create awesome Vue 3 with Vuex 4 video!",
        completed: false,
      },
    ]);
  },
};

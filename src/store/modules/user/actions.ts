import { ActionContext } from "vuex";
import { User, UserState } from "@/store/modules/user/index";
import { State } from "@/store/state";
import { USER_KEYS } from "@/store/modules/user/types";

type UserActions = {
  [USER_KEYS.SET_NEW_USER](
    context: ActionContext<UserState, State>,
    payload: { type: USER_KEYS.SET_NEW_USER; payload: User }
  ): void;
  [USER_KEYS.CHANGE_NAME](
    context: ActionContext<UserState, State>,
    payload: { type: USER_KEYS.CHANGE_NAME; payload: Omit<User, "age"> }
  ): void;
};

export const userActions: UserActions = {
  [USER_KEYS.SET_NEW_USER]({ commit }, { payload }) {
    commit(USER_KEYS.SET_NEW_USER, payload);
  },
  [USER_KEYS.CHANGE_NAME]({ commit }, { payload }) {
    commit(USER_KEYS.CHANGE_NAME, payload);
  },
};

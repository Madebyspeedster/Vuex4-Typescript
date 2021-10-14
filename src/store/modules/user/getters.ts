import { GetterTree } from "vuex";
import { User, UserState } from "@/store/modules/user/index";
import { State } from "@/store/state";
import { USER_KEYS } from "@/store/modules/user/types";

export type Getters = {
  [USER_KEYS.GET_CURRENT_USER](state: UserState): User;
};

export const getters: GetterTree<UserState, State> & Getters = {
  [USER_KEYS.GET_CURRENT_USER](state: UserState): User {
    return state;
  },
};

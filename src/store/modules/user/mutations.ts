import { User, UserState } from "@/store/modules/user/index";
import { MutationTree } from "vuex";
import { USER_KEYS } from "@/store/modules/user/types";

export type UserMutations = {
  [USER_KEYS.SET_NEW_USER](state: UserState, user: User): void;
  [USER_KEYS.CHANGE_NAME](state: UserState, user: User): void;
};

export const userMutations: MutationTree<UserState> & UserMutations = {
  [USER_KEYS.SET_NEW_USER](state, user) {
    Object.assign(state, user);
  },
  [USER_KEYS.CHANGE_NAME](state, user) {
    state.name = user.name;
  },
};

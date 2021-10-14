import { Module } from "vuex";
import { getters } from "@/store/modules/user/getters";
import { State } from "@/store/state";
import { userActions } from "@/store/modules/user/actions";
import { userMutations } from "@/store/modules/user/mutations";

export type User = {
  name: string;
  age: number | null;
};

export type UserState = {
  name: string;
  age: number | null;
};

const initialState: UserState = {
  name: "Alex",
  age: 28,
};

const userModule: Module<UserState, State> = {
  namespaced: true,
  state: initialState,
  getters,
  actions: userActions,
  mutations: userMutations,
};

export { userModule };

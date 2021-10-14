import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex";
import { InjectionKey } from "vue";

import { State, state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { userModule } from "@/store/modules/user";
import { userAccessModuleKey } from "@/store/modules/user/types";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  strict: Boolean(process.env.NODE_ENV === "production"),
  state,
  mutations,
  actions,
  getters,
  modules: {
    [userAccessModuleKey]: userModule,
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}

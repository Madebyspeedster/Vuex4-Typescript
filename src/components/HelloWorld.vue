<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Total count: {{ totalCount }}</p>
    <ul>
      <li v-for="item in todoList" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
    <input type="text" v-model="userName" v-on:input="changeUserName" />
    <h1>{{ user.name }}</h1>
    <h1>{{ user.age }}</h1>

    <button @click="changeUser">Set another user</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { ActionTypes } from "@/store/actions";
import { useStore } from "@/store";
import { ACCESS_USER_KEYS, USER_KEYS } from "@/store/modules/user/types";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const userName = ref("");
    const store = useStore();
    onMounted(() => {
      store.dispatch({
        type: ActionTypes.GetTodoItems,
      });
    });
    const changeUserName = () => {
      store.dispatch({
        type: `${ACCESS_USER_KEYS[USER_KEYS.SET_NEW_USER]}`,
        payload: { name: userName.value },
      });
    };
    const changeUser = (): void => {
      store.dispatch({
        type: `${ACCESS_USER_KEYS[USER_KEYS.SET_NEW_USER]}`,
        payload: { name: "Joe", age: 21 },
      });
    };
    const totalCount = computed(() => store.getters.totalCount);
    const todoList = computed(() => store.getters.todoList);
    const user = computed(
      () => store.getters[ACCESS_USER_KEYS[USER_KEYS.GET_CURRENT_USER]]
    );
    return { totalCount, todoList, changeUser, user, userName, changeUserName };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

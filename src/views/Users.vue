<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { getUsersList, GithubUser } from "@/api/github";
import { mapGetters } from "vuex";
import { ACCESS_USER_KEYS, USER_KEYS } from "@/store/modules/user/types";
import { Button } from "equal-vue";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      default: "Users title",
    },
  },
  data: () => ({
    store: useStore(),
    test: "Hello",
    users: [] as GithubUser[],
  }),

  computed: {
    ...mapGetters({
      dd: `${ACCESS_USER_KEYS[USER_KEYS.GET_CURRENT_USER]}`,
    }),
  },

  methods: {
    async fetchUsers() {
      this.users.length = 0;
      const usersList = await getUsersList();
      this.users.push(...usersList);
    },
  },
});
</script>

<template>
  <p>{{ title }}</p>
  <h1>Users Page</h1>
  <h1>{{ test }}</h1>
  <section id="main">
    <Button type="primary" @click="fetchUsers">Fetch Users!</Button>
    <ul style="max-width: 800px; margin: 0 auto" v-if="users.length">
      <li
        style="list-style: none; display: inline-block"
        v-for="gitUSer in users"
        :key="gitUSer.id"
      >
        {{ gitUSer.login }}
        <img
          style="width: 100px; height: 100px"
          :src="gitUSer.avatar_url"
          alt="{{gitUSer.login}}"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

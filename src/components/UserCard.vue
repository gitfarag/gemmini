<template>
  <v-container
    class="h-screen d-flex flex-column align-start justify-center fluid"
  >
    <div class="text-h2 mt-4 font-weight-bold text-uppercase text-subtitle-1">Users List</div>
    <v-row class="flex-row align-center justify-center text-light-50">
      <v-col cols="12" sm="6" md="4" v-for="(user, i) in users" :key="i">
        <v-card class="pb-3">
          <v-img
            height="200px"
            :src="user.avatar"
            cover
          ></v-img>

          <v-card-title>
            {{ `${user.first_name} ${user.last_name}` }}</v-card-title
          >

          <v-card-subtitle> {{ user.email }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      v-model="page"
      :length="length"
      class="my-4"
      :total-visible="2"
    ></v-pagination>
  </v-container>
</template>

<script>
import usersService from "@/Services/users.service";

export default {
  data() {
    return {
      users: [],
      page: 1,
      length: 2,
    };
  },
  methods: {
    // fetch all users
    async fetchData(params) {
      let res = await usersService.getAllUsers(params);
      this.users = res.data;
    },
  },
  watch: {
    async page() {
      await this.fetchData({ page: this.page });
    },
  },
  async mounted() {
    await this.fetchData({ page: this.page });
  },
};
//
</script>

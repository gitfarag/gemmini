<template>
  <v-container class="h-screen d-flex flex-column align-start justify-center fluid">
    <div class="text-h2">Users List</div>
    <v-row class="mt-6 flex-row align-center justify-center">
      <v-col cols="12" sm="6" md="4" v-for="(user, i) in users" :key="i">
        <v-card color="#1F7087">
          <div class="d-flex flex-no-wrap">
            <div>
              <v-card-title class="text-h5">
                {{ `${user.first_name} ${user.last_name}` }}
              </v-card-title>
              <v-card-subtitle>{{ user.email }}</v-card-subtitle>
              <v-card-subtitle>USER ID: {{ user.id }}</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" rounded="0" size="125">
              <v-img :src="user.avatar"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="length" class="my-4" :total-visible="2"></v-pagination>
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
      await this.fetchData({page: this.page});
    },
  },
  async mounted() {
    await this.fetchData({page: this.page});
  },
};
//
</script>

<script setup lang="ts">
  import UserCard from '../components/UserCard.vue'
  import { useUserStore } from '../stores/user';

  const userStore = useUserStore();

  const fetchUsers = (): void => {
    userStore.fetchUsers();
  };

  const AddUser = (): void => {
    userStore.AddUser();
  };

  fetchUsers();
</script>

<template>
  <div class="user-view-container">
    <div class="title-container">
      <h1 class="title">Liste des utilisateurs</h1>
      <button @click="AddUser">Ajouter un utilisateur</button>
    </div>
    <div class="user-list">
      <UserCard v-for="user in userStore.users" :user="user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>

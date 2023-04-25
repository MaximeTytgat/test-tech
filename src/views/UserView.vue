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
@import '../assets/base.css';
.user-view-container {
  margin: 100px 9%;

  .title-container {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 24px;
      font-weight: 700;
    }

    button {
      font-size: 14px;
      font-weight: 700;
      padding: 9px 10px;
      border-radius: 10px;
      border: none;

      &:focus{
        outline: none;   
      }
    }
  }
  .user-list {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    
    .user-card-container {
      margin-right: 20px;
      margin-bottom: 30px;
    }
  }
}
</style>
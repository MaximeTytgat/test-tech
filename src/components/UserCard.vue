<script setup lang="ts">
  import type { User } from '../stores/user'
  
  defineProps<{
    user: User
  }>()

  const edit = (username: User["name"]): void => console.log(`Edit ${username.first} ${username.last}`);
  const remove = (username: User["name"]): void => console.log(`Remove ${username.first} ${username.last}`);
  
  const borderColor = (gender: User["gender"]): string => gender === 'male' ? '#60547A' : '#F9E859';
  
</script>

<template>
  <div class="user-card-container">
    <div class="picture">
      <img :src="user.picture.medium" alt="" srcset="" :style="{ borderColor: borderColor(user.gender) }">
    </div>
    <div class="info">
      <h3 >{{ user.name.first }} {{ user.name.last }}</h3>
      <span class="email">{{ user.email }}</span>
    </div>

    <div class="actions">
      <button class="edit" @click="edit(user.name)">Éditer</button>
      <button class="remove" @click="remove(user.name)">Supprimer</button>
    </div>
  </div>



</template>

<style scoped lang="scss">
  .user-card-container {
    width: 270px;
    height: 270px;
    background-color: white;
    border-radius: 5px;
    
    .picture {
      display: flex;
      justify-content: center;
      margin-top: 22px;

      img {
        width:78px;
        margin: 10px;
        border: 4px solid;
        border-radius: 500px;
        -webkit-border-radius: 500px;
        -moz-border-radius: 500px;
      }
    }
    .info {
      color: var(--vt-c-black);
      text-align: center;

      h3 {
        margin-top: 15px;
        margin-bottom: 15px;
      }
    }
    .actions {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
    
      button {
        color: var(--vt-c-white);
        padding: 3px 15px;
        border-radius: 5px;
        border: none;

        &:focus{
          outline: none;   
        }
      }
      .edit {
        background-color: var(--color-purple);
      }
      .remove {
        background-color: var(--color-red);
      }
    }
  }

  .title-container {
    display: flex;
    justify-content: space-between;
  }

</style>

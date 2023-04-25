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
  <div>
    <h3 >{{ user.name.first }} {{ user.name.last }} {{ borderColor(user.gender) }}</h3>
    <button @click="edit(user.name)">edit</button>
    <button @click="remove(user.name)">remove</button>
  </div>
</template>

<style scoped lang="scss">
</style>

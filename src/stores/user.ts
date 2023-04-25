import { defineStore } from 'pinia';
import axios from 'axios';

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface UserStoreState {
  users: User[];
  isLoading: boolean;
  error: Error | null;
}

export const useUserStore = defineStore('user', {
  // Set the initial state
  state: (): UserStoreState => ({
    users: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    // Action to fetch users from the API
    async fetchUsers() {
      this.isLoading = true;

      try {
        // Make a GET request to the API
        const response = await axios.get('https://randomuser.me/api/?results=12');

        // Set the users array in the state to the results from the API
        this.users = response.data.results;

        this.isLoading = false;
      } catch (error: any) {
        this.error = error;
        this.isLoading = false;
      }
    },

    // Action to add a new user to the store
    async AddUser() {
      this.isLoading = true;
      try {
        // Fetch a new user from the API
        const response = await axios.get('https://randomuser.me/api/');
        const newUser = response.data.results[0];

        // Add the new user to the store
        this.users.push(newUser);

        this.isLoading = false;
      } catch (error: any) {
        this.error = error;
        this.isLoading = false;
      }
    },
  },
});

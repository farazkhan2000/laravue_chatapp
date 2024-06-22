<template>
  <div class="flex-1 p:2 flex flex-col h-[75vh]">
    <h2 class="text-3xl font-bold text-gray-700 pt-10 pb-4 px-6">Contacts</h2>
    <ul 
      class="list-none"
      v-for="contact in contacts" :key="contact.id"
    >
      <li class="flex gap-4 p-5  hover:bg-gray-200" @click="selectContact(contact)">
        <img 
          class=""
          style="width: 48px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0xKoXUryp0JZ1Sxp-99eQiQcFrmA1M1qbQ&s" 
          alt="profile"
        >
        <div>
          <p class="font-bold">{{ contact.name }}</p>
          <small class="text-gray-600 font-semibold">Hi there...</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ChatContacts',
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    async getContacts () {
      const response = await axios.get('/api/chat-contacts');
      this.contacts = response.data;
    },
    selectContact(contact) {
      this.$emit('selectedContact', contact);
    }
  },
  mounted() {
    this.getContacts();
  },
}
</script>

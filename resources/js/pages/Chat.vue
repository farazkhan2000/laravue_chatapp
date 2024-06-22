<template>
    <Head title="Chat" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Chat App</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg flex">
                    <div class="basis-1/4">
                        <ChatContacts @selectedContact="handleSelectedContact" />
                    </div>
                    <div class="basis-3/4">
                        <ChatBox :selectedContact="selectedContact" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ChatBox from '../components/chat/ChatBox.vue';
import ChatContacts from '../components/chat/ChatContacts.vue';

export default {
  components: {
    AuthenticatedLayout,
    Head,
    ChatBox,
    ChatContacts,
  },
  data () {
    return {
        selectedContact: null,
    }
  },
  mounted() {

  },
  methods: {
    handleSelectedContact(contact) {
      this.selectedContact = contact;
    },  
  },
};
</script>


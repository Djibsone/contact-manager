<template>
<div class="container mt-3">
  <div class="row">
    <div class="col">
      <p class="h3 text-success fw-bold">Edit Contact</p>
      <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ratione. Odit quaerat obcaecati incidunt eum doloribus iusto temporibus ipsum! Dolorem.</p>
    </div>
  </div>
</div>
<div class="container mt-3">
  <div class="row">
    <div class="col-md-4">
      <form @submit.prevent="updateSubmit()">
        <div class="mb-2">
          <input v-model="contact.name" type="text" name="" id="" class="form-control" placeholder="Name">
        </div>
        <div class="mb-2">
          <input v-model="contact.photo" type="text" name="" id="" class="form-control" placeholder="Photo URL">
        </div>
        <div class="mb-2">
          <input v-model="contact.email" type="email" name="" id="" class="form-control" placeholder="Email">
        </div>
        <div class="mb-2">
          <input v-model="contact.mobile" type="number" name="" id="" class="form-control" placeholder="Mobile">
        </div>
        <div class="mb-2">
          <input v-model="contact.company" type="text" name="" id="" class="form-control" placeholder="Company">
        </div>
        <div class="mb-2">
          <input v-model="contact.title" type="text" name="" id="" class="form-control" placeholder="Titre">
        </div>
        <div class="mb-2">
          <select required v-model="contact.groupId" name="" id="" class="form-control" v-if="groups.length > 0">
            <option value="">Select Group</option>
            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
          </select>
        </div>
        <div class="mb-2">
          <input type="submit" name="" id="" class="btn btn-success" value="Update">
        </div>
      </form>
    </div>
    <div class="col-md-4">
      <img :src="contact.photo" alt="" class="contact-img">
    </div>
  </div>
</div>
<pre>{{contact}}</pre>
</template>

<script>
import { ContactService } from '@/services/ContactService'
export default {
  name: 'EditContact',
  data: function() {
    return {
      contactId: this.$route.params.contactId,
      loading: false,
      contact: {
        name: '',
        photo: '',
        emal: '',
        mobile: '',
        company: '',
        title: '',
        groupId: ''
      },
      errorMsg: null,
      groups: Array() // ou groups: []
    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getContact(this.contactId);
      let groupResponse = await ContactService.getAllGroups();
      this.contact = response.data;
      this.groups = groupResponse.data;
      this.loading = false;
    } 
    catch (error) {
      this.errorMsg = error;
      this.loading = false;
    }
  },
  methods: {
    updateSubmit: async function(){
      try {
        let response = await ContactService.updateContact(this.contact, this.contactId);
        if (response) {
          return this.$router.push('/');
        } else {
          return this.$router.push('/contacts/edit/${this.contactId}');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

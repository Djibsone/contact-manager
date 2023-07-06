<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-succss fw-bold">Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm-"><i class="fa fa-plus-circle"> New</i></router-link>
        </p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro architecto consectetur optio omnis est nisi quisquam perspiciatis ab corrupti.</p>
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input type="text" name="" id="" class="form-control" placeholder="Search Name">
                </div>
                <div class="col">
                  <input type="submit" value="Search" class="btn btn-outline-dark">
                </div>
              </div>
            </div>
           </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Spinner  -->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner/>
        </div>
      </div>
    </div>
  </div>

  <!-- error msg -->
  <div v-if="!loading && errorMsg">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold">{{ errorMsg }}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container mt-3" @if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of contacts" :key="contact">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="contact.photo" alt="" class="contact-img">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
                  <li class="list-group-item">Email : <span class="fw-bold">{{ contact.email }}</span></li>
                  <li class="list-group-item">Mobile : <span class="fw-bold">{{ contact.mobile }}</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column align-items-center">
                <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1">
                  <i class="fa fa-pencil"></i>
                </router-link>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerComponent.vue';
import {ContactService} from "../services/ContactService"
export default {
  components: { Spinner },
  name: 'ContactManager',
  data: function(){
    return {
      loading: false,
      contacts: [],
      errorMsg: null 
    }
  },
  created: async function(){
    try {
      this.loading = true;
      let response = await ContactService.getAllContacts();
      this.contacts = response.data;
      this.loading = false;
    } 
    catch (error) {
      this.errorMsg = error;
      this.loading = false;
    }
  },
  methods: {

  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

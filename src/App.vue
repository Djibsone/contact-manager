<template>
  <!-- <Spinner/> -->
  <NavBar/>
  <router-view/>
</template>

<script>
//import Spinner from './components/SpinnerComponent.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {NavBar}

}
</script>

<style>

</style>

<template>
  <NavbarCoponent />
  <MainComponent />
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import NavbarCoponent from './components/NavbarCoponent.vue';
// import axios from 'axios';
  export default {
    data(){
      return{
      }
    },
    methods:{
      // getApi(){
      //   const urlMovie = store.apiUrl + this.EndPointMovie;
      //   axios.get(urlMovie,store.options).then((res)=>{
      //     store.listMovie = [...res.data.results];
      //     console.log(res.data.results);
      //   })
      // }
    },
    created(){
      // this.getApi();
    },
    components: { NavbarCoponent, MainComponent }
}
</script>

<style lang="scss" scoped>

</style>
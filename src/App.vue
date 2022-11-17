<template>
  <NavbarCoponent />
  <MainComponent />
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import NavbarCoponent from './components/NavbarCoponent.vue';
import {store} from './store';
import axios from 'axios';
export default {
  data(){
    return{
      options:{
        params:{
          api_key : '1829456f16e7707f91a23d5cca10ada9',
        }
      }
    }
  },
  methods:{
    getGender(){
      axios.get(store.genderUrl,this.options).then((res)=>{
        store.listGender = [...res.data.genres];
        console.log(res.data.genres);
      })
    }
  },
  created(){
    this.getGender();
  },
  components: { NavbarCoponent, MainComponent }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <NavbarCoponent />
  <JumboComponent v-if="!store.options.params.query"/>
  <MainComponent />
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import NavbarCoponent from './components/NavbarCoponent.vue';
import {store} from './store';
import axios from 'axios';
import JumboComponent from './components/JumboComponent.vue';
export default {
  data(){
    return{
      store,
      options:{
        params:{
          api_key : '1829456f16e7707f91a23d5cca10ada9',
        }
      }
    }
  },
  methods:{
    //funzione che mi restituisce la lista di tutti i generi dei film e serie tv
    getGenres(){
      axios.get(store.genresUrl,this.options).then((res)=>{
        store.listGenres = [...res.data.genres];
        // console.log(res.data.genres);
      })
    }
  },
  created(){
    this.getGenres();
  },
  components: { NavbarCoponent, MainComponent, JumboComponent }
}
</script>

<style lang="scss" scoped>

</style>
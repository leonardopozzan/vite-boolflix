<template>
    <main>
        <!-- componenti che stampano a schermo la lsta dei film o serie in base agli enpoint che gli passo -->
        <!-- con il v-if mostro uno o l'altro in base al fatto che l'utente abbia fatto la ricerca o meno -->
        <CardsComponent v-for="(el,i) in listEndPoint" :key="i" :endPoint="el" v-if="store.options.params.query" />
        <CardsComponent v-for="(el,j) in listTrend" :key="j" :endPoint="el" v-else />
    </main>
</template>

<script>
import CardsComponent from './CardsComponent.vue';
import {store} from '../store';

    export default {
        data(){
            return{
                store,
                listEndPoint: ['/search/movie','/search/tv'],
                listTrend: ['/trending/movie/week', '/trending/tv/week'],
            }
        },
        components:  { CardsComponent } 
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

main{
    padding-top: 100px;
    background-color: black;
}
</style>
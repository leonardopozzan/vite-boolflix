<template>
    <main>
        <CardsComponent v-for="(el,i) in store.listEndPoint" :key="i" :endPoint="el" v-if="store.options.params.query" />
        <CardsComponent v-for="(el,j) in store.listTrend" :key="j" :endPoint="el" v-else />
    </main>
</template>

<script>
import CardsComponent from './CardsComponent.vue';
import {store} from '../store';

    export default {
        data(){
            return{
                store
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
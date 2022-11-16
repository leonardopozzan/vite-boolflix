<template>
    <main>
        <CardsComponent v-for="(el,i) in listEndPoint" :key="i" :endPoint="el" />
    </main>
</template>

<script>
import CardsComponent from './CardsComponent.vue';

    export default {
        data(){
            return{
                listEndPoint: ['/search/movie','/search/tv']
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
    background-color: $dark-bg;
}
</style>
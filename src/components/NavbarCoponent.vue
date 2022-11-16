<template>
    <header>
        <nav class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center ms-5">
                <div class="img-box"><img src="/img/boolfix.png"></div>
                <ul class="d-flex m-0">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serie TV</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Nuovi e popolari</a></li>
                </ul>
            </div>
            <div class="me-5">
                <input type="text" class="me-3" placeholder="Titoli" v-model="store.options.params.query">
                <button class="btn btn-light" @click="change()"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </nav>
    </header>
</template>

<script>
import {store} from '../store';
    export default {
        data(){
            return{
                store
            }
        },
        methods:{
            change(){
                console.log(store.boolean)
                store.boolean = !store.boolean;
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

nav{
    height: 80px;
    background-color: $black;
    .img-box{
        width: 150px;
    }
    a{
        text-decoration: none;
        color: $white;
        font-size: 1.2rem;
        padding-right: 1rem;
    }
}
</style>
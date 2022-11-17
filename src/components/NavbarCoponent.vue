<template>
    <header class="sticky-top position-sticky">
        <nav class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center ms-5">
                <div class="img-box"><img src="/img/boolflix.png"></div>
                <ul class="d-flex m-0">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serie TV</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Nuovi e popolari</a></li>
                </ul>
            </div>
            <div class="me-5 d-flex align-items-center">
                <input type="text" class="me-3" placeholder="Titoli" v-model="input">
                <button class="my-btn" @click="change()"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </nav>
    </header>
</template>

<script>
import {store} from '../store';
    export default {
        data(){
            return{
                store,
                input : ''
            }
        },
        methods:{
            change(){
                store.options.params.query = this.input;
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;
header{
    z-index: 700;
    position: relative;
    border-bottom: 2px solid red ;
}
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
    input{
        background-color: $bg-dark;
        color: $white;
        width: 300px;

        border: 0;
        height: 40px;
        font-size: 1.3rem;
        border-radius: 0.3em;
    }
    .my-btn{
        border-radius: 0.3em;
        height: 40px;
        background-color: $bg-dark;
        padding: 0 1.5rem;
        color: $white;
        &:hover{
            background-color: rgba($color: white, $alpha: 0.3);
        }
    }
}
</style>
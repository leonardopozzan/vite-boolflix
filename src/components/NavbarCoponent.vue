<template>
    <header class="sticky-top position-sticky">
        <nav class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center ms-5">
                <div class="img-box"><img src="/img/boolflix.png"></div>
                <ul class="d-flex m-0">
                    <li><a href="#nogo">Home</a></li>
                    <li><a href="#serie-tv">Serie TV</a></li>
                    <li><a href="#film">Film</a></li>
                    <li @click="showMenu()"><a href="#nogo">Generi</a><i class="fa-solid fa-chevron-down arrow-down" :class="{'rotate' : show}"></i> </li>
                </ul>
            </div>
            <div class="me-5 d-flex align-items-center">
                <input type="text" class="me-3" placeholder="Titoli" v-model="input">
                <button class="my-btn" @click="change()"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </nav>
        <div class="menu" :class="{'show' : show}" ref="menu">
            <ul class="genres">
                <li v-for="(el,i) in store.listGenres" :key="i" @click="toFilterByGenre(el.id)" :class="{'active': store.genreFilter.includes(el.id)}">{{el.name}}</li>
            </ul>
        </div>
    </header>
</template>

<script>
import {store} from '../store';
import { h } from 'vue';
    export default {
        data(){
            return{
                store,
                input : '',
                show : false
            }
        },
        methods:{
            //funzione che associa il testo al filtro per la ricerca quando viene premuto il bottone
            change(){
                store.options.params.query = this.input;
            },
            showMenu(){
                this.show = !this.show;
            },//funzione che raccoglie il genre su cui filtrare
            toFilterByGenre(genreId){
                store.toggle = !store.toggle;
                if(store.genreFilter.includes(genreId)){
                    const i = store.genreFilter.indexOf(genreId);
                    store.genreFilter.splice(i,1);
                }else{
                    store.genreFilter.unshift(genreId);
                }
            }
        },
        mounted(){
        //     const list=  h(
        //         'ul',
        //         this.store.listGenres.map(({ id, text }) => {
        //             return h('li', { key: id }, text)
        //         })
        //     )
        //     console.log(list)
        //     const menu = this.$refs.menu;
        //     menu.children.push(list)
        // }
        // mounted(){
        //     const menu = this.$refs.menu;
        //     menu.innerHTML = `
        //     <ul class="genres">
        //         <li v-for="(el,i) in store.listGenres" :key="i" @click="toFilterByGenre(el.id)"><span :ref="el.id">{{el.name}}</span></li>
        //     </ul>`
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
.menu{
    height: 0;
    overflow: hidden;
    background-color: black;
    transition: 1s;
    color: white;
}
.show{
    height: 130px;
}
.rotate{
    transform: rotate(180deg);
}
.genres{
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 0;
    li{
        cursor: pointer;
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        &:hover{
            background-color: rgba($color: red, $alpha: 0.4);
        }
    }
    .active{
        background-color: rgba($color: red, $alpha: 0.4);
    }
}
nav{
    height: 80px;
    background-color: $black;
    .img-box{
        width: 150px;
    }
    ul{
        font-size: 1.3rem;
    }
    a{
        text-decoration: none;
        color: $white;
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
    .arrow-down{
        color: white;
        cursor: pointer;
        transition: 1s;
        font-size: 1.2rem;
    }
    
}
</style>
<template>
    <div class="title view" v-show="listCopy.length" :id="titleId">
        <i class="fa-solid fa-chevron-left arrow-left" @click="scrollLeft()"></i> 
        {{title}}
        <i class="fa-solid fa-chevron-right arrow-right" @click="scrollRight()"></i>
    </div>
    <div class="cards view" ref="cards" v-if="list.length">
        <CardComponent v-for="(item,j) in list" :key="j" :card="item" />
    </div>
    <div v-else class="message"> 
        Non ci sono Titoli con questo filtro
    </div>
    
</template>

<script>
import CardComponent from './CardComponent.vue';
import axios from 'axios';
import {store} from '../store';

    export default {
        data(){
            return{
                store,
                list:[],
                listCopy: [],
                length : store.genreFilter
            }
        },
    components: { CardComponent },
    watch: {
        //fa partire la chiamata api quando il bottone ricerca viene premuto e viene associato un vaolre a query 
        //prendendolo dalla barra input della navbar
        'store.options.params.query'(){
            this.getApi();
        },
        'store.genreFilter':{
            handler(){
                this.toFilterByGenre();
            },
            deep: true
        }
    },
    props: ['endPoint'],
    methods:{
        //funzione che chiama l'api in funzione dell'endoint che riceve dal padre
        getApi(){
            const url = store.apiUrl + this.endPoint;
            axios.get(url,store.options).then((res)=>{
                this.list = [...res.data.results];
                this.listCopy = [...res.data.results];
                // console.log(res.data.results);
            }).catch((error)=>{
                console.log(error.message)
            })
        },
        toFilterByGenre(){
            this.list = this.listCopy.filter((el)=>{
                if(!store.genreFilter.length){
                    return true
                }
                for(let i = 0; i < store.genreFilter.length; i++){
                    if(el.genre_ids.includes(store.genreFilter[i])){
                        return true
                    }
                }
                return false
            })
        },
        //funzioni per scrollare a destra e sinistra i film e serie
        scrollLeft() {
        const element = this.$refs.cards;
        console.log(element)
        element.scrollBy({left: -1000,behavior: "smooth",});
        },
        scrollRight() {
            const element = this.$refs.cards;
            element.scrollBy({left: 1000,behavior: "smooth",});
        }
    },
    computed:{
        //controllo sul titolo dell sezione in base al contenuto dell'endopoint
        title(){
            if(this.endPoint.includes('tv')){
                if(this.endPoint.includes('trending')){
                    return 'Trend Serie TV'
                }
                return 'Serie TV';
            }else if(this.endPoint.includes('movie')){
                if(this.endPoint.includes('trending')){
                    return 'Trend Film'
                }
                return 'Film';
            }
        },
        titleId(){
            if(this.endPoint.includes('tv')){
                return 'serie-tv';
            }else if(this.endPoint.includes('movie')){
                return 'film';
            }
        }
    },
    mounted(){
        // chiamata di default all'api con gli end point del trending
        this.getApi();
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;
.cards{
    height: 410px;
    overflow-x: auto;
    overflow-y: visible;
    display: flex;
    align-items: flex-start;
    padding-top: 2rem;
    &::-webkit-scrollbar {
        display: none;
    }
}
.title{
    font-size: 3.5rem;
    font-weight: bold;
    color: $white;
    margin-left: 1rem;
}
.view{
        position: relative;
        z-index: 300;
    }

.arrow-left, .arrow-right{
    color: $white;
    font-size: 3rem;
    z-index: 400;
    width: 50px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
}
.message{
    height: 410px;
    padding-top: 2rem;
    padding-left: 1rem;
    font-size: 4rem;
    color: $white;
    position: relative;
    z-index: 50;
}

</style>
<template>
    <div class="title view" v-show="list.length">{{title}}</div> 
    <div class="cards view">
        <CardComponent v-for="(item,j) in list" :key="j" :card="item"/>
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
                list:[]
            }
        },
    components: { CardComponent },
    watch: {
        //fa partire la chiamata api quando il bottone ricerca viene premuto e viene associato un vaolre a query 
        //prendendolo dalla barra input della navbar
        'store.options.params.query'(){
            this.getApi();
        }
    },
    props: ['endPoint'],
    methods:{
        //funzione che chiama l'api in funzione dell'endoint che riceve dal padre
        getApi(){
            const url = store.apiUrl + this.endPoint;
            axios.get(url,store.options).then((res)=>{
                this.list = [...res.data.results];
                // console.log(res.data.results);
            }).catch((error)=>{
                console.log(error.message)
            })
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
    overflow-y:initial;
    display: flex;
    align-items: flex-start;
    padding-top: 2rem;
}
.title{
    font-size: 3.5rem;
    font-weight: bold;
    color: $white;
    margin-left: 1rem;
}
.view{
        position: relative;
        z-index: 600;
    }
</style>
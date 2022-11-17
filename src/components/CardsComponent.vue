<template>
    <div class="title" v-show="list.length">{{title}}</div> 
    <div class="cards">
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
        'store.boolean'(){
            this.getApi();
        }
    },
    props: ['endPoint'],
    methods:{
        getApi(){
            const url = store.apiUrl + this.endPoint;
            axios.get(url,store.options).then((res)=>{
                this.list = [...res.data.results];
                console.log(res.data.results);
            }).catch((error)=>{
                console.log(error.message)
            })
        }
    },
    computed:{
        title(){
            if(this.endPoint.includes('tv')){
                return 'Serie TV';
            }else if(this.endPoint.includes('movie')){
                return 'Film';
            }
        }
    },
    mounted(){
        this.getApi();
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;
.cards{
    height: 400px;
    overflow-x: auto;
    overflow-y:initial;
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
</style>
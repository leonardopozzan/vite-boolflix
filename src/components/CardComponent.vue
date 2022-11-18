<template>
    <div class="my-card" @mouseover="show = true" @mouseleave="show = false" @mouseover.once="getActors()">
        <div class="img-box">
            <img :src="urlImage" >
        </div>
        <div class="mask"></div>
        <div class="description">
            <div class="title">
                {{originalTitle}}
            </div>
            <Transition name="fade">
                <div v-show="show">
                    <section>
                        <i v-for="n in 5" class="fa-star" :class="(n<=vote) ? 'fa-solid' : 'fa-regular'"></i>
                        <img :src="flag" >
                    </section>
                    <section class="subtitle">
                        <div  v-for="(el,i) in store.listGenres" :key="el.id" v-show="card.genre_ids.includes(el.id)">
                            {{el.name}}
                        </div>
                    </section>
                    <section class="subtitle">
                        <div>Descrizione:</div>
                        <div>
                            {{card.overview}}
                        </div>
                    </section>
                    <section class="subtitle">
                        <div>Attori:</div>
                        <span v-for="(actor,k) in actorsList" :key="actor.id" v-show="k <=4" class="actor-name" :class="{'comma': k<=3}">
                            {{actor.name}}
                        </span>
                    </section>
                </div>
            </Transition>
        </div>
    </div>
    
</template>

<script>
import {store} from '../store';
import axios from 'axios';
    export default {
        data(){
            return{
                store,
                show: false,
                actorsList: [],
                options:{
                    params:{
                    api_key : '1829456f16e7707f91a23d5cca10ada9',
                    }
                }
            }
        },
        props:['card'],
        computed:{
            //trovo la url dell'immagine e se non esiste metto il logo di boolflix di default
            urlImage(){
                const urlImage = (this.card.backdrop_path) ? `${store.imgUrl}${this.card.backdrop_path}` : '/img/boolflix.png';
                return urlImage;
            },//trovo il titolo distinguendo tra serie tv e movie
            title(){
                const title =  this.card.title || this.card.name;
                return title;
            },//trovo il titolo originale distinguendo tra serie tv e movie
            originalTitle(){
                const originalTitle = this.card.original_title || this.card.original_name;
                return originalTitle;
            },//calcolo il voto su 5 al posto che in deimale
            vote(){
                return Math.round(this.card.vote_average/2);
            },//costruisco l'endpoint per gli attori distinguendo tra serie e movie
            endPointActros(){
                if(this.card.title){
                    return `/movie/${this.card.id}/credits`
                }else{
                    return `/tv/${this.card.id}/credits`
                }
            },// trovo l'url per l'immagine delle bandiere prendendole da un api esterna e gestendo tutti i casi comuni in cui non trova la bandiera
            flag(){
                let flag = this.card.original_language;
                if(flag == 'en'){
                    flag = 'gb';
                }else if(flag == 'ja'){
                    flag= 'jp';
                }else if(flag == 'zh'){
                    flag = 'cn';
                }else if(flag == 'ko') {
                    flag = 'kr';             
                }else if (flag == 'cs') {
                    flag = 'sk';             
                } else if (flag == 'da') {
                    flag = 'dk';             
                } else if (flag == 'xx'){
                    flag = 'mz';
                } else if (flag == 'hi'){
                    flag = 'fj';
                } else if (flag == 'ta'){
                    flag = 'tw';
                }
                const flagUp = flag.toUpperCase();
                const urlFlag = `https://www.countryflagicons.com/SHINY/32/${flagUp}.png`
                return urlFlag;
            }
        },
        methods: {
            //chiamo la lista degli attori della serie o film
            getActors(){
                const url = store.apiUrl + this.endPointActros
                axios.get(url,this.options).then((res)=>{
                    this.actorsList = [...res.data.cast];
                    // console.log(res.data.cast)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;
.my-card{
    flex-shrink: 0;
    background-color: $black;
    margin: 0 0.6rem;
    position: relative;
    transition: 0.5s;
    z-index: 50;
    overflow: hidden;
    border-radius: 0.5rem  ;
    border-bottom: 2px solid red;
    &:hover{
        transform: scale(1.4);
        transform-origin: top left;
        z-index: 100;
        .description{
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
    .mask{
        background-color: $black;
        height: 0.5rem;
        width: 100%;
        z-index: 200;
        position: absolute;
        bottom: 0; left: 0;
    }
    .img-box{
        width: 360px;
        height: 200px;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .description{
        background: linear-gradient(180deg, rgba(207, 207, 207, 0) 1%, rgba(0, 0, 0, 1) 40%);
        position: absolute;
        bottom: 0; left: 0;
        width: 100%;
        height: 100px;
        color: $white;
        transition: 0.5s;
        padding: 0.5rem;
        &::-webkit-scrollbar {
            display: none;
            }
        section{
            padding-top: 0.4rem;
        }
        .title{
            font-size: 1.7rem;
            font-weight: bold;
        }
        .subtitle{
            font-size: 0.8rem;
        }
        .comma::after{
            content: ', ';
        }
        
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s ;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
}

// {
//     "adult": false,
//     "backdrop_path": "/5L6RPHHUFlsliTqKRmUxFnIkXpR.jpg",
//     "genre_ids": [
//         28,
//         14,
//         27,
//         35
//     ],
//     "id": 755566,
//     "original_language": "en",
//     "original_title": "Day Shift",
//     "overview": "An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.",
//     "popularity": 247.648,
//     "poster_path": "/bI7lGR5HuYlENlp11brKUAaPHuO.jpg",
//     "release_date": "2022-08-10",
//     "title": "Day Shift",
//     "video": false,
//     "vote_average": 6.9,
//     "vote_count": 1294
// }
// {
//     "backdrop_path": "/kKFUtMcC6oVT18O34MeEWAHMkty.jpg",
//     "first_air_date": "2022-10-02",
//     "genre_ids": [
//         16,
//         9648
//     ],
//     "id": 195382,
//     "name": "Housing Complex C",
//     "origin_country": [
//         "US"
//     ],
//     "original_language": "en",
//     "original_name": "C団地",
//     "overview": "Kimi lives in a small, low-cost housing complex located in the seaside town of Kurosaki, with horrific incidents starting to occur and trouble seemingly following her wherever she goes. Is an ancient evil stalking the residents of Housing Complex C?",
//     "popularity": 65.244,
//     "poster_path": "/x7JgoRNRPO1FLzZwfUxWfAG44hS.jpg",
//     "vote_average": 6.3,
//     "vote_count": 10
// }
</style>


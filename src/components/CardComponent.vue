<template>
    
    <div class="my-card" @mouseover="show = true" @mouseleave="show = false">
        <div class="img-box">
            <img :src="urlImage" >
        </div>
        <div class="description">
            <div class="title col-12">
                {{originalTitle}}
            </div>
            <div :class="{'col-4': show}">
                <Transition name="fade">
                    <div v-show="show">
                        <i v-for="n in 5" class="fa-star" :class="(n<=vote) ? 'fa-solid' : 'fa-regular'"></i>
                    </div>
                </Transition>
                <Transition name="fade">
                    <img :src="flag" v-show="show">
                </Transition>
                <Transition name="fade" v-for="(el,i) in store.listGender">
                    <div class="subtitle" v-show="show" v-if="card.genre_ids.includes(el.id)">
                        {{el.name}}
                    </div>
                </Transition>
            </div>
            <Transition name="fade">
                <div class="info col-8" v-show="show">
                    {{card.overview}}
                </div>
            </Transition>
        </div>
    </div>
    
</template>

<script>
import {store} from '../store'
    export default {
        data(){
            return{
                store,
                show: false
            }
        },
        props:['card'],
        computed:{
            urlImage(){
                const urlImage = (this.card.backdrop_path) ? `${store.imgUrl}${this.card.backdrop_path}` : '/img/boolfix.png';
                return urlImage;
            },
            title(){
                const title = (this.card.title) ? this.card.title : this.card.name;
                return title;
            },
            originalTitle(){
                const originalTitle = (this.card.original_title) ? this.card.original_title : this.card.original_name;
                return originalTitle;
            },
            vote(){
                return Math.round(this.card.vote_average/2);
            },
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
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;
.my-card{
    flex-shrink: 0;
    background-color: $dark-bg;
    margin: 0 0.6rem;
    position: relative;
    transition: 0.5s;
    z-index: 50;
    &:hover{
        transform: scale(1.4);
        transform-origin: top left;
        z-index: 100;
        .description{
            height: 100%;
            width: 100%;
        }
    }
    .img-box{
        width: 445px;
        height: 250px;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .description{
        position: absolute;
        bottom: 0; left: 0;
        width: 100%;
        height: 100px;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(207, 207, 207, 0) 1%, rgba(0, 0, 0, 1) 40%);
        color: $white;
        display: flex;
        flex-wrap: wrap;
        transition: 0.5s;
        padding-left: 0.5rem;
        padding-bottom: 0.5rem;
        .title{
            padding: 0 0.1rem 0.3rem;
            font-size: 2rem;
            font-weight: bold;
        }
        .subtitle{
            padding: 0 0.1rem 0.3rem;
        }
        .info{
            padding: 0 0.5rem 0.5rem;
            overflow: auto;
            height: 100%;
            &::-webkit-scrollbar {
            display: none;
            }
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


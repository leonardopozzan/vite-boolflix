<template>
    
    <div class="my-card">
        <div class="img-box">
            <img :src="urlImage" >
        </div>
        <div class="description">
            <div class="col-4">
                <div class="title">
                    {{originalTitle}}
                </div>
                <div class="subtitle">
                    {{title}}
                </div>
            </div>
            <div class="info col-8">
                {{card.overview}}
            </div>
        </div>
    </div>
    
</template>

<script>
import {store} from '../store'
    export default {
        data(){
            store
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
    .img-box{
    width: 445px;
        img{
            height: 250px;
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
        .title{
            padding: 0 0.1rem 0.3rem;
            font-size: 1.3rem;
            font-weight: bold;
        }
        .subtitle{
            padding: 0 0.1rem 0.3rem;
        }
        .info{
            padding: 0 0.5rem 0.5rem;
        }
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


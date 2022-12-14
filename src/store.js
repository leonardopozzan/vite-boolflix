import {reactive} from 'vue';

export const store = reactive({
    apiUrl : 'https://api.themoviedb.org/3',
    imgUrl: 'https://image.tmdb.org/t/p/w300/',
    genresUrl : 'https://api.themoviedb.org/3/genre/movie/list',
    listGenres : [],
    options:{
        params:{
            api_key : '1829456f16e7707f91a23d5cca10ada9',
            query: ''
        }
    },
    genreFilter: []
})
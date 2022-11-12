import axioClient from "./ApiClient";

export const category={
    movie:'movie',
    tv:'tv'
}
export const movieType={
    upcoming:'upcoming',
    popular:'popular',
    top_rated:'top_rated'
}

export const tvType={
    popular:'popular',
    top_rated:'top_rated',
    on_the_air:'on_the_air'
}

const tmdbApi={
    getMovieList:(type,params)=>{
        const url='movie/'+movieType[type];
        return axioClient.get(url,params)
    },
    getTvList:(type,params)=>{
        const url='tv/'+movieType[type];
        return axioClient.get(url,params)
    },
    getVideos:(cate,id)=>{
        const url=category[cate]+'/'+id+'/videos'
        return axioClient.get(url,{params:{}});
    },
    search:(cate,params)=>{
        const url='search/'+category[cate]
        return axioClient.get(url,params);
    },
    getDetails:(cate,id,params)=>{
        const url=category[cate]+'/'+id
        return axioClient.get(url,params);
    },
    credits:(cate,id,params)=>{
        const url=category[cate]+'/'+id+'/credits';
        return axioClient.get(url,{params:{}});
    },
     
    similar:(cate,id,params)=>{
        const url=category[cate]+'/'+id+'/similar';
        return axioClient.get(url,{params:{}});
    }

}

export default tmdbApi;

import axios from "axios";

const apiConfig={
    baseurl:'https://api.themoviedb.org/3/',
    apikey:'6f5f64ef17d8caf9df73f52bab2946a7',  
    originalImg:(imgpath)=>`https://image.tmdb.org/t/p/original/${imgpath}`,
    w500Img:(imgpath)=>`https://image.tmdb.org/t/p/w500/${imgpath}`,
}
export default apiConfig;
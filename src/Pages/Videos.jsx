import tmdbApi from '../Api/tmdbapi';
import apiConfig from '../Api/ApiConfig';
import { useEffect,useState,useRef } from 'react';
import { useParams } from 'react-router'

import React from 'react'

const VideoList=props=> {
    
    const {category} = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results[1]);
            console.log("Videos"+res);
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
         <Videos item={videos}/>

            {/* {
                videos.map((item, i) => (
                    <Videos key={i} item={item}/>
                ))
            } */}
        </>
    );
}
const Videos = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    // useEffect(() => {
    //     const height = iframeRef.current.offsetWidth * 15 / 16 + 'px';
    //     iframeRef.current.setAttribute('height', height);
    // }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item ? item.name :'VideoNotAvailable..!'}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item?item.key:''}`}                
                width="100%"
                title="video"
                height='110%'
            ></iframe>
        </div>
    )
}
export default VideoList
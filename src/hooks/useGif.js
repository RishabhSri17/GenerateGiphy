import React from "react"
import { useState , useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif,setGif]=useState('');
    const[loading,setLoading]=useState('false');

    async function fetchData(tag){
        try{
            setLoading(true);
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
            const output = await axios.get(tag? `${url}&tag=${tag}` : randomMemeUrl);
            const imageSrc = output.data.data.images.downsized_large.url;
            /* console.log(imageSrc); */
            setGif(imageSrc);
            setLoading(false);
        }catch(err){
            console.error("Error fetching data: ", err);
        }
    }

    useEffect(() => {
        fetchData('car');
    },[])

    return {gif,loading,fetchData};
};

export default useGif;

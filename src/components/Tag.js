import React, { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "./Spinner.jsx"
import useGif from "../hooks/useGif.js";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const[tag,setTag]=useState('car');
    const{gif,loading,fetchData}=useGif(tag);

    function clickHandler() {
        fetchData();
    }

  return (
    <div className="w-1/2 bg-blue-300 rounded-lg border border-black flex flex-col items-center">

      <h1 className="text-xl underline uppercase font-bold my-1">A {tag} Tag Gif</h1>

      {
        loading ? (<Spinner />) : (<img className="my-1" src={gif} width="450" />)
      }

      <input 
        className="w-9/12 bg-white text-xl py-2 rounded-lg my-1 text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />


      <button className="w-9/12 bg-blue-400 text-xl py-2 rounded-lg my-1" onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
};

export default Tag;

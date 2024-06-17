import React, { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "./Spinner.jsx"
import useGif from "../hooks/useGif.js";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    const{gif,loading,fetchData} = useGif();

    function clickHandler() {
      fetchData();
    }

  return (
    <div className="w-1/2 bg-green-300 rounded-lg border border-black flex flex-col items-center">

      <h1 className="text-xl underline uppercase font-bold my-1">A Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img className="my-1" src={gif} width="450" />)
      }

      <button
       onClick={() => fetchData()}
       className="w-9/12 bg-blue-400 text-xl py-2 rounded-lg my-1">
        Generate
      </button>
    </div>
  )
};

export default Random;

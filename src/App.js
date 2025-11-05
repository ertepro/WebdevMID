
import './App.css';
import SearchBar from './searchBar';
import Footer from "./Footer";
import {useEffect, useState} from "react";
import searchBar from "./searchBar";
function App() {

    let string ="https://api.tvmaze.com/search/shows?q="+SearchBar.search;
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(string)
            .then((res) => res.json())
            .then(data => setData(data))
    },[string])

    console.log(data);
    console.log(string)




  return (
    <>
        <div className="header">
        <h1>TVMAZE</h1>
        </div>
        <SearchBar></SearchBar>
        <Footer></Footer>

        </>
  );
}

export default App;

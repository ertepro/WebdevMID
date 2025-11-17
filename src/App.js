
import './App.css';
import Footer from "./Footer";
import {useEffect, useMemo, useState} from "react";
import {useForm} from "react-hook-form";

function App() {
    const{register, handleSubmit, watch} = useForm();
    const onSubmit = (data, e) => console.log(data);
    const onError = (errors, e) => console.log(errors, e);
    const searchValue = watch("search");
    const [data,setData]=useState([]);


    useEffect(()=>{

        fetch("https://api.tvmaze.com/search/shows?q="+searchValue)
            .then((res) => res.json())
            .then(data => setData(data))
    },[data, searchValue, setData]);


    const [likedData, setLikedData] = useState([]);
    const addLiked = (item) => {
        setLikedData((prev) => {
            if (prev.some((liked) => liked.show.id === item.show.id)) return prev;
            return [...prev, item];
        });
    };




    console.log(data);







  return (
    <>
        <div className="header">
        <h1>TVMAZE</h1>
        </div>
        <form className="searchbar" onSubmit={handleSubmit(onSubmit,onError)}>
            <input {...register("search")}></input>

        </form>
        {data.map((item)=>(
            <div className="item" key={item.id}>
                <p key={item.show.id}> {item.show.name}</p>
                <p className="description">{item.show.summary?.replace(/<[^>]+>/g, "")}</p>
                <button className="like" onClick={() => addLiked(item)}>LIKE</button>

            </div>))}
        <div className="LikedShows">
            <h2>Liked Shows</h2>
            {likedData.map((item)=>(
                <p  className="likedtext"   key={item.show.id}> {item.show.name} </p>
            ))}
        </div>


        <Footer></Footer>

</>



  );
}

export default App;

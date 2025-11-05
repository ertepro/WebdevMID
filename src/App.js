
import './App.css';
import Footer from "./Footer";
import {useEffect, useState} from "react";
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
    console.log(data)







  return (
    <>
        <div className="header">
        <h1>TVMAZE</h1>
        </div>
        <form className="searchbar" onSubmit={handleSubmit(onSubmit,onError)}>
            <input {...register("search")}></input>
            <button type="submit">Search</button>
        </form>
        {data.map((item)=>(
            <div className="item" key={item.id}>
            <p key={item.show.id}> {item.show.name} type: {item.show.type}</p>
                <img className="img" src={item.show.image} alt=""/>
            </div>))}
        <Footer></Footer>

</>



  );
}

export default App;

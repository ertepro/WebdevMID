import {useForm} from "react-hook-form";
function SearchBar() {

    const{register, handleSubmit} = useForm();
    const onSubmit = (data, e) => console.log(data);
    const onError = (errors, e) => console.log(errors, e);



    return (
        <form className="searchbar" onSubmit={handleSubmit(onSubmit,onError)}>
            <input {...register("search")}></input>
            <button type="submit">Search</button>
        </form>




    );

}
export default SearchBar;
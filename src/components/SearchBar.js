import React,{useState} from 'react'

export default function SearchBar({onSearch}) {
    const[inputValue,setInputValue]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue){
            onSearch(inputValue);
            setInputValue('')
        }
    };

    return (
       <form onSubmit={handleSubmit} className='search-bar'>
        <div className='input-container'>

        <input type='text' placeholder='Search for a city' value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}></input>
         <button type='submit'className='search-button'>Search</button>
         </div>
       </form>
    )
}
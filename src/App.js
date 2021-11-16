import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';
function App() {

  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const APP_ID ="0806b1f1";
  const APP_KEY ="b7774ff67e256d7d1d07d338347fab23";
  useEffect(  ()=>{
    getRecipes();
  },[]);

  const getRecipes = async ()=>{
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(result.data.hits);
  }
  const onInputchange = (e) => {
    setSearch(e.target.value);
  }
  const onsearchClick = ()=>{
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search} onInputchange={onInputchange} onsearchClick={onsearchClick} />
      <div className='container'>
      <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;

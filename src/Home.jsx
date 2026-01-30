import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from './assets/Logo.png'

export default function Home() {

    const navigate = useNavigate();
    let [categories, setCategories] = useState([]);
    let [meals, setMeals] = useState([]);

    async function getAllCat(){
        let {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        // console.log(data.categories);
        setCategories(data.categories);
        
    }

    async function getAllMeals(catName){
        if(catName){
            let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
            // console.log(data);
            
            setMeals(data.meals);
            // console.log(catName);
            
            return 
        }
        let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        // console.log(data.meals);
        setMeals(data.meals)
        
    }

    useEffect(()=>{
        getAllCat();
        getAllMeals();
        // getAllMeals("Seafood");
    },[])

  return (
    <>
        <div className='bg-rose-50 min-h-screen p-5'>
            <h1 className='text-4xl font-bold  bg-linear-to-r from-[#F19328] via-[#ca1023c4] bg-clip-text text-transparent'>Learn, Cook, Eat Your Food</h1>

            <div className='mt-5'>
                <select className="block md:hidden w-full p-2 border rounded" onChange={(e)=>{getAllMeals(e.target.value)}} >
          <option>All</option>
          {categories.map((card) => (
            <option key={card.strCategory} value={card.strCategory} >
              {card.strCategory}
            </option>
          ))}
        </select>
                <ul className='flex-wrap gap-x-3 gap-y-6 hidden md:flex'>
                    <li><NavLink  to="/" className="border-2 border-gray-400 px-3 py-1 rounded-2xl hover:shadow-md shadow-gray-400 hover:bg-white duration-300 text-2xl" onClick={()=>{getAllMeals()}}>All</NavLink></li>
                    {categories.map(cat=> <li key={cat.idCategory}><NavLink  to={`/category/${cat.strCategory}`} className="border-2 border-gray-400 px-3 py-1 rounded-2xl hover:shadow-md shadow-gray-400 hover:bg-white duration-300 text-2xl" onClick={(e)=>{getAllMeals(e.target.innerHTML)}}>{cat.strCategory}</NavLink></li>)}
                </ul>
            </div>

            <div className='mt-25 flex flex-wrap '>
                {meals.map(meal => <div key={meal.idMeal} className='md:w-3/12 w-full px-5 py-15'>
                    <div className='bg-white group rounded-4xl flex flex-col items-center gap-3 p-3 hover:scale-105 duration-300 hover:shadow-lg shadow-gray-300'>
                        <img src={meal.strMealThumb} className='w-50 rounded-full -mt-20 group-hover:rotate-360 duration-300 shadow-md shadow-gray-400' alt={meal.strMeal} />
                        <h3 className='text-2xl text-center'>{meal.strMeal}</h3>
                        <button className='bg-green-700 text-white px-3 py-1 rounded-2xl text-2xl' onClick={()=>{navigate(`/mealdetails/${meal.idMeal}`)}}>View Recipe</button>
                    </div>
                </div>)}
                
               
             
            </div>
        </div>
    </>
  )
}



import React, { useEffect, useState } from 'react'
import Style from './FoodApi.module.css'
const Foodhelper = ({ val }) => {
    // let [isapi,setApi]=useState("")
    let [fetc,setFetc]=useState([])
    let getFood=async()=>{
        try {
          let getdata=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${val}`)
            getdata=await getdata.json()
            setFetc(getdata.meals)
            console.log(getdata.meals)
        } catch (error) {

        }
      }
      useEffect(()=>{
        getFood()
      },[])
  return (
    <div className={Style.par} >
    { fetc && fetc.map((m)=>{
        return <>
          <div className={Style.min}><img src={m.strMealThumb} alt="" height={"100px"} width={"100px"}  />
          <h4>{m.strMeal}</h4></div>
        </>
       })} </div>
  )
}

export default Foodhelper
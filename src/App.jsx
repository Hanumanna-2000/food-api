import React from 'react'
import Student from './Components/Student'
import Child from './Components/Child';

import Parent from './ContextAPI/Parent';
import Counter from './UseState/Counter';
import Taggling from './Taggling/Taggling';
import UsestatewithObject from './UseState/UsestatewithObject';
import SearchApi from './SearchApi/SearchApi';
import Todolist from './Todolist/Todolist';
import Simpleuseffect from './UseEffect/Simpleuseffect';
import Apifetch from './ApiFetching/Apifetch';
import Foodapi from './FoodApi/Foodapi';
import Style from './FoodApi/FoodApi.module.css'
import Localhostdata from './BtoFdatafetch/Localhostdata';
import Sigup from './inter/Sigup';
import Register from './inter/Register';
import News from './news/News';
// import Register from './Users/Register';
import Alluser from './Users/Alluser';
import Signup from './Validations/Signup';
import ParentCounter from './Memoization/ParentCounter';
import Add from './UseState/Add';



export const App = () => {
  return ( 
    <div className={Style.app}>
        {/* <Student name="manju" age={23} gender="male" imgUrl="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg"/> */}
        {/* <input type="text" /> */}
        {/* <Student name="koustubh" age={23} gender="male" imgUrl="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg" ><h1>hanumanna</h1></Student> */}
        <hr />
        {/* <Counter/> */}
        {/* <UsestatewithObject/> */}
        {/* <SearchApi/> */}
        {/* <Apifetch/> */}
        <Foodapi/>
        {/* <Register/> */}
        {/* <News/> */}
        {/* <Signup/> */}
        {/* <ParentCounter/> */}
           {/* <Register/> */}
        {/* <Alluser/> */}
        {/* <Localhostdata/> */}
        {/* <Simpleuseffect/> */}
        {/* <Todolist/> */}
        {/* <MediaCard/> */}
        {/* <Add/> */}
        <hr />
        {/* <Taggling   />  */}
        {/* <Parent/> */}
        {/* <Parent/> */}
        {/* <Student name="Ajay" age={24} gender="male" imgUrl="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg"/> */}

        {/* <Student name="sagar" age={26} gender="male" imgUrl="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg"/> */}

        {/* <Student name="ramana" age={33} gender="male" imgUrl="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-4.jpg"/> */}

        {/* <Student name="gavi" age={13} gender="male" imgUrl="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg"/> */}

    </div>
  )
}

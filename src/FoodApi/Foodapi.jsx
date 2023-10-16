import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../ApiFetching/useFetch";
import Foodhelper from "./Foodhelper";
import Style from "./FoodApi.module.css";

const Foodapi = () => {
  let [data1, setData] = useState([]); //^this for api data storage
  let [isearch, setIssearch] = useState("");
  let [isapi, setApi] = useState("");
  let [read, setRead] = useState(false);
  let [isloading, setIsloading] = useState(false);
  let [isvalue, setValue] = useState(0);
  let [page, setPage] = useState(0);
  let num;

  let getApi = async (val) => {
    try {
      let getdata = await fetch(
        "https://themealdb.com/api/json/v1/1/search.php?s"
      );
      getdata = await getdata.json();
      let num = getdata.meals.length;
      let data = getdata.meals;
      setData(data);
      setIsloading(false);
      console.log(getdata.meals);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setIsloading(true);
    getApi();
  }, []);

  let handleSearch = ({ target: { value } }) => {
    setIssearch(value);
  };

  let filterData = data1
    .filter((d) => {
      return d.strMeal.toLowerCase().includes(isearch);
    })
    ;

  let IncFun = () => {
    setValue((c) => c + 3);
    getApi();
    setPage((c) => c + 1);
  };

  let DecFun = () => {
    setValue((c) => c - 3);
    getApi();
    setPage((c) => c - 1);
  };

  return (
    <div className={Style.rend}>
      <h1>FOOD SEARCH </h1>
      <br />
      <input
        type="text"
        onChange={handleSearch}
        placeholder="   Search Your Item Here..."
      />

      {isloading && <h1>loading...</h1>}
      <div style={{ border: "2px solid red", float: "left" }}>
        {filterData.map((m) => {
          return (
            <>
              <div className={Style.main}>
                <div className={Style.big}>
                  <div className={Style.left}>
                    <img
                      src={m.strMealThumb}
                      alt=""
                      height={"220px"}
                      width={"250px"}
                    />
                    <div className={Style.textdiv}>
                      <div>
                        <h4>{m.strMeal}</h4>
                        <h4> {m.strArea}</h4>
                      </div>

                      <div>
                        <h4>{m.strTags}</h4>
                        <h4> {m.strCategory}</h4>
                      </div>
                    </div>
                  </div>
                  <div className={Style.right}>
                    <p>Making Process: {m.strInstructions.slice(0, 500)}</p>
                  </div>
                </div>

                <div>{read ? <Foodhelper val={isapi} /> : ""}</div>
                <button
                  onClick={() => {
                    setApi(m.strCategory);
                    setRead(!read);
                  }}
                >
                  {read ? "See less" : "See more"}
                </button>
                <br />
              </div>
            </>
          );
        }).slice(isvalue, isvalue + 3)}
        {/* Pagenation code */}
        <button onClick={DecFun} style={{ backgroundColor: "lightcoral" }}>
          back
        </button>
        {page === 1 ? (
          <button style={{ background: "white", width: "30px" }}>1</button>
        ) : (
          <button style={{ width: "30px" }}>1</button>
        )}
        {page === 2 ? (
          <button style={{ background: "white", width: "30px" }}>2</button>
        ) : (
          <button style={{ width: "30px" }}>2</button>
        )}
        {page === 3 ? (
          <button style={{ background: "white", width: "30px" }}>3</button>
        ) : (
          <button style={{ width: "30px" }}>3</button>
        )}
        {page === 4 ? (
          <button style={{ background: "white", width: "30px" }}>4</button>
        ) : (
          <button style={{ width: "30px" }}>4</button>
        )}
        {page === 5 ? (
          <button style={{ background: "white", width: "30px" }}>5</button>
        ) : (
          <button style={{ width: "30px" }}>5</button>
        )}
        {page === 6 ? (
          <button style={{ background: "white", width: "30px" }}>6</button>
        ) : (
          <button style={{ width: "30px" }}>6</button>
        )}
        {page === 7 ? (
          <button style={{ background: "white", width: "30px" }}>7</button>
        ) : (
          <button style={{ width: "30px" }}>7</button>
        )}
        <button onClick={IncFun} style={{ backgroundColor: "lightcoral" }}>
          next
        </button>{" "}
        {num}
      </div>
    </div>
  );
};

export default Foodapi;

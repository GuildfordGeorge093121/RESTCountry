import React, { BaseSyntheticEvent, useState, useEffect, useContext, Suspense } from "react";
import { MdSearch } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { Context } from "./ContextProvider";
import { ApiType } from "./APIType";
import CountryCard from "./CountryCard";
import Progress from './Progress'

const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [toggle, setToggle] = useState(false);
  const [filterData, setFilterData]= useState([] as ApiType[])
  const {data} = useContext(Context)
  const handleChange = ({ target }: BaseSyntheticEvent) => {
    setSearch(target.value)
    
  };


  useEffect(()=>{
    if(search.length===0){
      if(filter.length===0){
        setFilterData(data)
      }
      else{
        const regEx =new RegExp(filter,'ig')
        const resultFilter= data.filter((item)=> regEx.test(item.region));
        setFilterData(resultFilter)
      }
    }
    else{
      if(filter.length===0){
        const searchRegEx= new RegExp(search, 'ig');
        const searchResult= data.filter((item)=>searchRegEx.test(item.name));
        setFilterData(searchResult)
      }
      else{
        const regEx =new RegExp(filter,'ig')
        const searchRegEx= new RegExp(search, 'ig');
        const resultFilter= data.filter((item)=> regEx.test(item.region));
        const searchResult= resultFilter.filter((item)=>searchRegEx.test(item.name));
        setFilterData(searchResult)
      }
    }
    
  },[data,filter, search])

  const handleClick = () => {};
  const handleSubmit = () => {};
  return (
      <section className="home">
        <div className="container">
          <div className="form flexSB">
            <div className="input-field">
              <button className="btn" onClick={handleSubmit}>
                <span className="icon">
                  <MdSearch />
                </span>
              </button>

              <input type="text" name="search" id="" placeholder="Search for a country..." onChange={handleChange} value={search}/>
            </div>
            <div className="filter-field">
              <button className="btn drop-menu flexSB" onClick={() => {setToggle(!toggle);}}>
                <span>{filter ? filter : "Filter by Region"}</span>
                <span className="icon">
                  <BiChevronDown />
                </span>
              </button>
              {toggle && (
                <div className="drop-down-menu">
                  <button className="btn drop-btn" onClick={()=>{setFilter(""); setToggle(false);}}>
                    Filter by Region
                  </button>
                  <button className="btn drop-btn"onClick={() => {setFilter("Africa"); setToggle(false)}}>
                    Africa
                  </button>
                  <button className="btn drop-btn" onClick={() => {setFilter("America"); setToggle(false)}}>
                    America
                  </button>
                  <button className="btn drop-btn" onClick={() => {setFilter("Asia"); setToggle(false)}}>
                    Asia
                  </button>
                  <button className="btn drop-btn" onClick={() => {setFilter("Europe"); setToggle(false)}}>
                    Europe
                  </button>
                  <button className="btn drop-btn" onClick={() => {setFilter("Oceania"); setToggle(false)}}>
                    Oceania
                  </button>
                </div>
              )}
            </div>
          </div>
          {
            filterData.length>0?
            (<div className="country-cards">
              <div className="country-grid">
                  {
                    filterData.map((country,index)=>{
                      return (
                          <CountryCard data={country} key={index}/> 
                      )
                    })
                  }
                
              </div>    
          </div>) : 
          (
            <div className='progress-mobile-size'>
              <Progress />
            </div>
          )
          }
        </div>
      </section>
  );
};

export default Home;

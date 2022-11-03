import React, { useContext, useState, useEffect } from 'react'
import { ApiType } from './APIType'
import { BsArrowLeft } from 'react-icons/bs'
import { Context } from './ContextProvider'
import { useParams, Link } from 'react-router-dom'
import CountryProgress from './CountryProgress'



const Country = () => {
    const [country, setCountry] = useState({} as ApiType)
    const {data}= useContext(Context);
    const {name}= useParams();
    useEffect(()=>{
        if(data.length>0){
            const searchName= data.filter((item)=>item.name.toLocaleLowerCase()===name?.toLocaleLowerCase());
            if(searchName.length>0){
                setCountry(searchName[0])
            }
        }
    },[data,name])


  return (
    <>
    
            <section className="country" style={{height: Object.keys(country).length===0? '100vh': 'initial'}}>
            <div className="container">
                <div className="flexSB">
                <Link to='/' className="link btn home-btn">
                    <div>
                        <span className="icon"><BsArrowLeft/></span>
                        <span>Back</span>
                    </div>
                </Link>
                {
                    Object.keys(country).length===0 &&
                    <CountryProgress/>
                }
                </div>
                {   
                    Object.keys(country).length>0 &&
                    (
                    <div className="country-content">
                        <div className="flexSB">
                            <div className="country-img">
                                <img src={country.flag} alt="" />
                            </div>
                            <div className="country-content-info">
                                <div className="country-name">{country.name}</div>
                                <div className="chart-info">
                                    <div className="flex-item">
                                        <div className="chart">
                                            <span className="point">Native Name:</span>
                                            <span className="point-answer">{country.nativeName}</span>
                                        </div>
                                        <div className="chart">
                                            <span className="point">Population:</span>
                                            <span className="point-answer">{country.population.toLocaleString('en-US')}</span>
                                        </div>
                                        <div className="chart">
                                            <span className="point">Region:</span>
                                            <span className="point-answer">{country.region}</span>
                                        </div>
                                        <div className="chart">
                                            <span className="point">Sub Region:</span>
                                            <span className="point-answer">{country.subregion}</span>
                                        </div>
                                        <div className="chart">
                                            <span className="point">Capital:</span>
                                            <span className="point-answer">{country.capital}</span>
                                        </div>
                                    </div>
                                    <div className="flex-item">
                                        <div className="chart">
                                            <span className="point">Top Level Domain:</span>
                                            <span className="point-answer">{country.topLevelDomain.join(", ")}</span>
                                            
                                        </div>
                                        <div className="chart">
                                            <span className="point">Currencies:</span>
                                            <span className="point-answer">{country.currencies?.map((curr)=>curr.name).join(", ")}</span>
                                            
                                        </div>
                                        <div className="chart">
                                            <span className="point">Languages:</span>
                                            <span className="point-answer">{country.languages.map((lan)=>lan.name).join(", ")}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="border-group">
                                    <div className="chart">
                                            <span className="point">Border Countries:</span>
                                            <div>
                                                {
                                                    country.borders?.map((border,index)=>
                                                        {
                                                            const {name}=data.filter((item)=>item.alpha3Code===border)[0]
                                                            return (
                                                                <Link to={`/country/${name.toLocaleLowerCase()}`} className="link btn country-btn" key={index}>
                                                                    {name}
                                                                </Link>
                                                            )
                                                        }
                                                    )
                                                }
                                            </div>
                                            
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            </section>
        
    </>
  )
}

export default Country
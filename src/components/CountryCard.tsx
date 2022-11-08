import React from "react";
import { ApiType } from "./APIType";
import { Link } from "react-router-dom";

const CountryCard = ({ data }: { data: ApiType }) => {
  return (
    <Link to={`/country/${data.name.toLocaleLowerCase()}`} className="link grid-item">
      <div className="card">
        <div className="flag">
          <img src={data.flags.png} alt="" />
        </div>
        <div className="country-mini-info">
          <div className="country-name">{data.name}</div>
          <div className="country-mini-chart">
            <div className="chart">
              <span className="point">Population:</span>
              <span className="point-answer">{data.population.toLocaleString("en-US")}</span>
            </div>
            <div className="chart">
              <span className="point">Region:</span>
              <span className="point-answer">{data.region}</span>
            </div>
            <div className="chart">
              <span className="point">Capital:</span>
              <span className="point-answer">{data.capital}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;

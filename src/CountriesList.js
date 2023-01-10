import countries from './countries.json';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios"


const CountriesList = () => {

const [data, setData] = useState([])

const fetchData = async () => {

try {
    const callData = await axios.get('https://ih-countries-api.herokuapp.com/countries')
    setData(callData.data)

}
catch(err) {console.log(err)}
}

useEffect(() => {

    fetchData()

}, []
)


  return (
    <div className="countryList">

      {data.map((e, i) => (
        <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} 
        to={e.alpha3Code}
           state={{e}}>
          <h1 key={e.alpha2Code} className="list">{e.name.common}</h1>
        </NavLink>
      ))}


    </div>
  );
};

export default CountriesList;

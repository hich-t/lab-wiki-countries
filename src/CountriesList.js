import countries from './countries.json';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const CountriesList = () => {
  const [country, setCountry] = useState(countries);


  return (
    <div className="countryList">

      {country.map((e, i) => (
        <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} 
        to={e.alpha3Code}
           state={{e}}>
          <h1 key={e.alpha2Code} className="list">{e.name.common}</h1>
        </NavLink>
      ))}

      <Outlet />

    </div>
  );
};

export default CountriesList;

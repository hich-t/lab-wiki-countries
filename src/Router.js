import { Routes,Route } from "react-router-dom"
import CountriesList from "./CountriesList"
import CountryDetails from "./CountryDetails"
import NavBar from "./NavBar"
import App from "./App"

const Router = () => {

return(
<>
<NavBar />

<div className="cont">

<CountriesList  />

<Routes>
<Route path="/:countryID" element={<CountryDetails/>} /> 
<Route path="/" element={<App />} /> 


</Routes>
</div>

</>
)
}

export default Router
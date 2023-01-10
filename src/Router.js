import { Routes,Route } from "react-router-dom"
import CountriesList from "./CountriesList"
import CountryDetails from "./CountryDetails"
import NavBar from "./NavBar"
import App from "./App"

const Router = () => {

return(
<>
<NavBar />
<CountriesList  />

<Routes>
<Route path="/" element={<App />} /> 

<Route path="/:countryID" element={<CountryDetails/>} /> 

</Routes>

</>
)
}

export default Router
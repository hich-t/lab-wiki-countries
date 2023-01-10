import { useLocation } from "react-router-dom";

const CountryDetails = () => {
    // const [country, setCountry] = useState(countries)
let location = useLocation()
console.log(location)
return (

<div className="details">

<table className="countrytable">
<thead> 
{location.state.e.name.common}
</thead>
<tr>
<td>Flag</td>
<td>
<img src={`https://flagpedia.net/data/flags/icon/72x54/${location.state.e.alpha2Code.toLowerCase()}.png`} alt=""/>
</td>
</tr>
<tr>
<td>Capital</td><td>{location.state.e.capital}</td>
</tr>
</table>


</div>



)

}

export default CountryDetails
import { useLocation } from "react-router-dom";

const CountryDetails = () => {
let location = useLocation()
return (

<div className="details">

<table className="countrytable">
<thead> 
<tr>
<td className="titrepays">{location.state.e.name.common}</td>
</tr>
</thead>
<tbody>
<tr>
<td>Flag</td>
<td className="contenupays" >
<img src={`https://flagpedia.net/data/flags/icon/72x54/${location.state.e.alpha2Code.toLowerCase()}.png`} alt=""/>
</td>
</tr>
<tr>
<td >Capital</td>
<td className='contenupays'>{location.state.e.capital}</td>
</tr>
</tbody>
</table>


</div>



)

}

export default CountryDetails
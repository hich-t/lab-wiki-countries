import { useLocation } from "react-router-dom";

const CountryDetails = () => {
let location = useLocation()

console.log(location)
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
<tr>
<td >Borders</td>


{/* 
{ location.state.e.map((e,i) => ( <td>

<a href={e.borders} >{e.name.common}</a>


</td> ))
  } */}



<td className='contenupays'>
   { location.state.e.borders.length > 0 ?
 
    location.state.e.borders.map((e) => (   
     <ul>
    <li> <a href={e}>
    {e} </a> 
    </li>
    </ul>))
   
   
     : "No Borders" }
  
</td>





</tr>
</tbody>
</table>


</div>



)

}

export default CountryDetails
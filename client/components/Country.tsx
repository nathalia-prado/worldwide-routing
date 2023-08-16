import { useParams } from "react-router-dom";
import data from "../../data/countries"

function Country() {
    const params = useParams()
    const countryCode = params.code 
    const country = data.find(obj => obj.code === countryCode)
    if(!country){
        return <p>Country not found</p>
    }
    return (
        <div>
        <h2>{country.flag} {country.name}</h2>
        <p><strong>Capital: </strong>{country.capital}</p>
        <p><strong>Area: </strong>{country.areaSqKms}</p>
        <p><strong>Population: </strong>{country.population}</p>
        <p><strong>Currency: </strong>{country.currencyCode}</p>
        <p><strong>Neighbours: </strong>{country.neighbours}</p>
        </div>
    )
}

export default Country
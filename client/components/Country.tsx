import { useParams } from "react-router-dom";
import data from "../../data/countries"
import { Link } from "react-router-dom";

function Country() {
    const params = useParams()
    const continentName = params.name
    const countryCode = params.code 
    const country = data.find(obj => obj.code === countryCode)
    if(!country){
        return <p>Country not found</p>
    }

    // if the neighbours exist
    let neighbours = []
    if (country.neighbours && country.neighbours !== '') {
        // Transform neighbours string in an array
        const neighbourCodes = country.neighbours.split(',')
        neighbours = neighbourCodes.map(code => data.find(country => country.code === code))
    }

    return (
        <div>
        <h2>{country.flag} {country.name}</h2>
        <p><strong>Capital: </strong>{country.capital}</p>
        <p><strong>Area: </strong>{country.areaSqKms}</p>
        <p><strong>Population: </strong>{country.population}</p>
        <p><strong>Currency: </strong>{country.currencyCode}</p>
        <p><strong>Neighbours: </strong></p>
        <ul>
            {neighbours.map(neighbour => <li key={neighbour.code}><Link to={`../continents/${continentName}/${neighbour.code}`}>{neighbour.name}</Link></li>)}
        </ul>
        </div>
    )
}

export default Country
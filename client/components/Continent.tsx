import { useParams } from "react-router-dom";
import data from "../../data/continents"

function Continent() {
    const params = useParams()
    const continentName = params.name || 'Africa'
    const continent = data[continentName]
    return (
        <div>
        <h2>{continentName}</h2>
        <ul>
            {continent.countries.map(country => <li key={country.code}>{country.name} </li>)}
        </ul>
        </div>
    )
}

export default Continent



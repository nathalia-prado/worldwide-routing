import { useParams } from "react-router-dom";
import data from "../../data/continents"
import { Link } from "react-router-dom";

function Continent() {
    const params = useParams()
    const continentName = params.name 
    const continent = data[continentName as keyof typeof data]
    if(!continent){
        return <p>Continent not found</p>
    }
    return (
        <div>
        <h2>{continentName}</h2>
        <img src={`/images/${continent.image}`} alt={continentName} />
        <ul>
            {continent.countries.map(country => <li key={country.code}><Link to={`${country.code}`}>{country.name}</Link> </li>)}
        </ul>
        </div>
    )
}

export default Continent



import data from "../../data/continents"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {Object.keys(data).map(continent => <li key={continent}><Link to={`continents/${continent}`}>{continent}</Link> </li>)}
      </ul>
    </div>
  )
}

export default Nav


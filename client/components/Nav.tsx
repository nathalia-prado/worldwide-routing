import data from "../../data/continents"

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {Object.keys(data).map(key => <li key={key}>{key} </li>)}
      </ul>
    </div>
  )
}

export default Nav


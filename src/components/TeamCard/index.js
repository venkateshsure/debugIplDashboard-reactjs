import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {each} = props
  // console.log(each)
  const {name, id, teamImageURL} = each

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard

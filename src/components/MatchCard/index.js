// Write your code here
import './index.css'

const Matchcard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default Matchcard

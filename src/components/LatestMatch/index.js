// Write your code here
import './index.css'

const Matchcard = props => {
  const {LatestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = LatestMatch

  return (
    <div className="latest_match-card-con">
      <h1>Latest Match</h1>
      <div className="latest-match-card">
        <div className="logo-container">
          <div className="match-details-main">
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="match-logo"
          />
        </div>

        <div className="latest-match-details-info">
          <div className=" match-info-item">
            <p>First Innings</p>
            <p>{firstInnings}</p>
          </div>
          <div className="match-info-item">
            <p>Second Innings</p>
            <p>{secondInnings}</p>
          </div>
          <div className="match-info-item">
            <p>Man Of The Match</p>
            <p>{manOfTheMatch}</p>
          </div>
          <div className="match-info-item">
            <p>Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Matchcard

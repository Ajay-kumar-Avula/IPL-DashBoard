// Write your code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()
    const filteredData = teamsData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(filteredData)
    this.setState({teamsList: filteredData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="logo-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-title">IPl Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list-container">
            {teamsList.map(each => (
              <TeamCard teamDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home

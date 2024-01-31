import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {userInput: ''}

  onSearch = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(userInput),
    )
    return (
      <div className="container">
        <div className="card">
          <h1>Destination Search</h1>
          <div className="input-container">
            <input
              onChange={this.onSearch}
              placeholder="Search"
              type="search"
              className="search-input"
              value={userInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachItem => (
              <DestinationItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

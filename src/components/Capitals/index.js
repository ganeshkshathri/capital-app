import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    isCapital: countryAndCapitalsList[0].country,
    isCountry: '',
  }

  updateCapital = event => {
    const searchCapital = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    console.log(searchCapital)
    this.setState({
      isCapital: searchCapital[0].country,
      isCountry: event.target.value,
    })
  }

  render() {
    const {isCapital, isCountry} = this.state
    console.log(isCapital)
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1>Countries And Capitals</h1>
          <div className="forms">
            <select
              className="country-box"
              value={isCountry}
              onChange={this.updateCapital}
            >
              {countryAndCapitalsList.map(eachUser => (
                <option value={eachUser.id} key={eachUser.id}>
                  {eachUser.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <p>{isCapital}</p>
        </div>
      </div>
    )
  }
}
export default Capitals

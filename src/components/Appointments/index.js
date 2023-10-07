import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', list: [], flag: false}

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  dateChange = event => {
    this.setState({date: event.target.value})
  }

  Submit = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newList = {
      id: uuidv4(),
      title,
      date,
      star: false,
    }
    console.log(newList)
    this.setState(prevState => ({
      list: [...prevState.list, newList],
      title: '',
      date: '',
    }))
  }

  update = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each => {
        if (each.id === id) {
          return {...each, star: !each.star}
        }
        return each
      }),
    }))
  }

  starButton = () => {
    this.setState(prevState => ({flag: !prevState.flag}))
  }

  filteredList = () => {
    const {flag, list} = this.state
    if (flag) {
      return list.filter(each => each.star === true)
    }
    return list
  }

  render() {
    const {list, title, date} = this.state
    console.log(list)
    const finalList = this.filteredList()
    return (
      <div className="container1">
        <div className="container11">
          <div className="container2">
            <div className="container3">
              <h1 className="heading1">Add Appointment</h1>
              <form name="form" onSubmit={this.Submit}>
                <label className="label" htmlFor="titel">
                  TITLE
                </label>
                <br />
                <input
                  onChange={this.titleChange}
                  className="input"
                  placeholder="TITLE"
                  id="titel"
                  type="text"
                  value={title}
                />
                <br />
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <br />
                <input
                  onChange={this.dateChange}
                  className="input"
                  id="date"
                  type="date"
                  value={date}
                />
                <br />
                <button type="submit" className="button1">
                  Add
                </button>
              </form>
            </div>
            <div className="imageContainer">
              <img
                className="image1"
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <hr />
          <div className="container4">
            <h1 className="heading2">Appointments</h1>
            <button onClick={this.starButton} className="button2" type="button">
              Starred
            </button>
          </div>
          <ul className="listContainer">
            {finalList.map(each => (
              <AppointmentItem item={each} key={each.id} update={this.update} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

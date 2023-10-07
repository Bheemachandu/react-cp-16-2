import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {item, update} = props
  const {id, title, date, star} = item
  const imageUrl = star
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const formatDate = format(new Date(date), 'dd MMMM yyyy,EEEE')
  const buttonClick = () => {
    update(id)
  }
  return (
    <li>
      <div className="container111">
        <div className="container222">
          <p className="heading111">{title}</p>
          <button
            data-testid="star"
            className="button222"
            type="button"
            onClick={buttonClick}
          >
            <img className="image111" alt="star" src={imageUrl} />
          </button>
        </div>
        <p className="para111">Date: {formatDate}</p>
      </div>
    </li>
  )
}

export default AppointmentItem

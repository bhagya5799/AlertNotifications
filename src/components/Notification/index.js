// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="kl">{children}</div>
      <GrFormClose className="cross-icon" />
    </div>
  )
}
export default Notification

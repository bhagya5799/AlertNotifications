// Write your code here
import React, {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'
import Notification from '../Notification'

const NotificationList = [
  {
    name: 'Success',
    icon: 'AiFillCheckCircle',
    descrption: 'You can access the all files in the folder',
  },
  {
    name: 'Error',
    icon: 'AiFillCheckCircle',
    descrption: 'You can access the all files in the folder',
  },
  {
    name: 'Warning',
    icon: 'kk',
    descrption: 'You can access the all files in the folder',
  },
  {
    name: 'Info',
    icon: 'kk',
    descrption: 'You can access the all files in the folder',
  },
]

const renderErrorNotification = () => (
  <Notification>
    <div className="success-container">
      <RiErrorWarningFill className="error" />
      <div className="content-container">
        <h1 className="error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </div>
  </Notification>
)

const renderInfoNotification = () => (
  <Notification>
    <div className="success-container">
      <MdInfo className="info" />
      <div className="content-container">
        <h1 className="info">INfo</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </div>
  </Notification>
)

const renderWarningNotification = () => (
  <Notification>
    <div className="success-container">
      <MdWarning className="warning" />
      <div className="content-container">
        <h1 className="warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </div>
  </Notification>
)

const renderSuccessNotification = () => (
  <Notification>
    <div className="success-container">
      <AiFillCheckCircle className="icon" />
      <div className="content-container">
        <h1 className="success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </div>
  </Notification>
)

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alertNotification-container">
        <h1>Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    )
  }
}

export default AlertNotifications

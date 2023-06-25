import {Component} from 'react'

import {AiFillLike} from 'react-icons/ai'

import './index.css'

class UserMessage extends Component {
  state = {count: 0, newList: []}

  componentDidMount() {
    const {userEnterMessage} = this.props
    this.setState({newList: userEnterMessage})
  }

  onClickLike = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {newList, count} = this.state
    const {userMessage, hour, minutes, user, initial} = newList
    const likeCount = count > 0 ? count : ''
    let initialColor = ''

    switch (initial) {
      case 'A':
        initialColor = 'lightpink'
        break
      case 'B':
        initialColor = 'lightyellow'
        break
      case 'C':
        initialColor = 'lightred'
        break
      case 'D':
        initialColor = 'lightblue'
        break
      case 'E':
        initialColor = 'lightgreen'
        break
      default:
        break
    }

    return (
      <li className="userMsgContainer1">
        <div className="content1">
          <p className={`${initialColor} initialUser1`}>{initial}</p>
          <h3 className="userName1">{user}</h3>
          <p className="time1">
            {hour}:{minutes}
          </p>
        </div>
        <div className="msgLikeContainer1">
          <div className="msgContent1">
            <p className="message1">{userMessage}</p>
          </div>
          <button className="likeBtn1" type="button" onClick={this.onClickLike}>
            <AiFillLike className="likeIcon1" />
          </button>
          <p className="likeCount1">{likeCount}</p>
        </div>
      </li>
    )
  }
}

export default UserMessage

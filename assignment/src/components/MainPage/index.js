import {Component} from 'react'
import { SiDraugiemdotlv } from "react-icons/si";
import { BsEmojiSmile} from "react-icons/bs";
import {v4} from 'uuid'
import Picker from 'emoji-picker-react'
import Popup from 'reactjs-popup'
import Message from '../Message'

import './index.css'

const users = ['Kishore', 'Bobby', 'Raju', 'Deepak', 'Akhil']

class MainPage extends Component {
  state = {list: [], messages: ''}

  Change = event => {
    this.setState({messages: event.target.value})
  }

  EmojiClick = (event) => {
    const {messages} = this.state
    console.log(event.emoji)
    const emojiMessage = messages + event.emoji
    this.setState({messages: emojiMessage})
  }

  SendMessage = event => {
    const {messages} = this.state
    const time = new Date()
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const index = Math.ceil(Math.random() * users.length) - 1
    const user = users[index]
    const initial = user[0]

    if (event.key === 'Enter' && messages !== '') {
      const newMessage = {
        id: v4(),
        userMessage: messages,
        hour,
        minutes,
        user,
        initial,
      }

      this.setState(prevState => ({
        list: [...prevState.list, newMessage],
        messages: '',
      }))
    }
  }

  render() {
    const {messages, list} = this.state
    return (
      <div className="chatSection1">
        <div className="headerSection1">
          <div className="headerContent1">
            <h1 className="headIntro1">Antivirus Software</h1>
            <p className="desc1">which protects the computer from malicious software</p>
          </div>
          <div className="countSection1">
            <p className="count1">4/20</p>
            <SiDraugiemdotlv className="peopleIcon1" />
          </div>
        </div>
        <hr className="hrLine1" />
        <ul className="userEnterMsgContainer1">
          {list.map(each => (
            <Message key={each.id} userEnterMessage={each} />
          ))}
        </ul>
        <div className="msgContainer1">
          <input
            type="text"
            placeholder="Text Message"
            className="msgInput1"
            value={messages}
            onChange={this.Change}
            onKeyDown={this.SendMessage}
          />
          <Popup
            trigger={
              <button type="button" className="emojiButton1">
                <BsEmojiSmile className="emoji1" />
              </button>
            }
            position="top right"
          >
            <Picker onEmojiClick={this.EmojiClick} />
          </Popup>
        </div>
      </div>
    )
  }
}

export default MainPage

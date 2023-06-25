import {AiOutlinePlusCircle} from 'react-icons/ai'
import './index.css'

const Sidebar = () => (
  <div className="sidebarContainer1">
    <div className="headerSide1">
      <p className="initial1">ES</p>
      <div className="nameDesignation1">
        <h1 className="name1">EXTRA SPACE</h1>
        <p className="designation1">Software Solutions</p>
      </div>
    </div>
    <div className="conversationsCont1">
      <p className="conversation1">Avaliable Services</p>
      <AiOutlinePlusCircle className="plus1" />
    </div>
    <div className="officeCont1">
      <p className="hash1">#</p>
      <p className="officeName1">Web Software</p>
    </div>
    <div className="officeCont1 introduction1">
      <p className="hash1">#</p>
      <p className="officeName1 intro1">Antivirus Software</p>
    </div>
    <div className="officeCont1">
      <p className="hash1">#</p>
      <p className="officeName1">Graphics Software</p>
    </div>
  </div>
)

export default Sidebar

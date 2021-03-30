import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
//import { UserContext } from '../contexts/UserContext';
import Radium from 'radium';


function MemberPage() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open)
  const history = useHistory()

  //const { logOutUser } = useContext(UserContext)

  const goToStartPage = async () => {
    history.push("/");
  //  const u = await logOutUser()
    window.location.reload()
  };

  MemberPage.handleClickOutside = () => setOpen(false);

  function handleOnClick(url) {
    history.push(url)
  }

  return (
    <div className="dd-wrapper" style={memberPageStyle} >
      <div
        tabIndex={0}
        className="dd-header"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_action">
          <p>{open ? 'CloseMyPages' : 'User Name'}</p>
        </div>
      </div>
      {open && (
        <div className="myPages-sub-menu">
          <p className="routerLinks" key="1" style={routerLinkStyle} onClick={() => handleOnClick("/mypage")}>My Page</p>
          <p className="routerLinks" key="2" style={routerLinkStyle} onClick={goToStartPage}>Log Out</p>
        </div >
      )}
    </div>
  )
}




const memberPageStyle = {
  margin: '0.5em',
  padding: '5px 5px',
  cursor: 'pointer'
}

const routerLinkStyle = {
  margin: '1em',
  cursor: 'pointer',
  ':hover': {
    color: 'rgba(255, 166, 0, 0.664)'
  }
}

export default Radium(MemberPage);



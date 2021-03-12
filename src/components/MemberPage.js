import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import onClickOutside from 'react-onclickoutside';

function MemberPage() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open)
  const history = useHistory()

  const goToStartPage = () => {
    history.push("/");
    window.location.reload(false)
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
          <p>{open ? 'Close My Pages' : 'User Name'}</p>
        </div>
      </div>
      {open && (
        <div className="myPages-sub-menu">
          <p ><u>My page</u></p>
          <p className="routerLinks" key="1" style={routerLinkStyle} onClick={() => handleOnClick("/mypage")}>My Page</p>
          <p className="routerLinks" key="2" style={routerLinkStyle} onClick={goToStartPage}>Log Out</p>
        </div >
      )}
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => MemberPage.handleClickOutside
}


const memberPageStyle = {
  margin: '1em',
  padding: '0 20px',
  cursor: 'pointer'
}

const routerLinkStyle = {
  margin: '1em',
  cursor: 'pointer',
  ':hover': {
    color: 'rgba(255, 166, 0, 0.664)'
  }
}

export default onClickOutside(MemberPage, clickOutsideConfig);



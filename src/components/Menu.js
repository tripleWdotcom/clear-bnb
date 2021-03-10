import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyPages from '../pages/MyPages.js'
import MyAccount from '../pages/MyAccount.js'

function Menu() {
  const [OpenMyPages, setOpen] = useState(false);
  const toggle = () => setOpen(!OpenMyPages)
  Menu.handleClickOutside = () => setOpen(false);
 
  function handleOnClick(item) {
    if (item === 1) {
       <Route>
        <Switch>
         <Route exact path="/mypages" component={MyPages} />
        </Switch>
       </Route >
    } else if (item === 2) {
      <Route>
        <Switch>
          <Route exact path="/myaccount" component={MyAccount} />
        </Switch> 
      </Route>
    }
  }
 
  return (    
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        onKeyPress={() => toggle(!OpenMyPages)}
        onClick={() => toggle(!OpenMyPages)}
        style={menuStyle}
      >
        <div className="dd-header_action">
          <p>{OpenMyPages ? 'Close My Pages' : 'My Pages'}</p>
        </div>
      </div>
      {OpenMyPages && (
        <div className="myPages-sub-menu">
          <p className="routerLinks" onClick={() => handleOnClick(1)}>My pages</p>
          <p className="routerLinks" onClick={() => handleOnClick(2)}>My Account</p>
          <p className="routerLinks" onClick={() => handleOnClick(3)}>Log Out</p>
        </div >
      )}
      </div>
  )  
}

const clickOutsideConfig = {
  handleClickOutside:() => Menu.handleClickOutside
}

const menuStyle = {
  
  'p': {
    margin: '1em',
    cursor: 'pointer',
    ':hover': {
      color: 'rgba(255, 166, 0, 0.664)'
    }
  }

}

export default onClickOutside(Menu, clickOutsideConfig);



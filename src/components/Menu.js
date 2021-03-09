import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function Menu({title,multiSelect = false}) {
  const [MyPages, setOpen] = useState(false);
  const toggle = () => setOpen(!MyPages)
  Menu.handleClickOutside = () => setOpen(false);

  const items = [
    {
      id: 1,
      value: 'My pages',
    },
    {
      id: 2,
      value:'My Account',
    },
    {
      id: 3,
      value: 'Log Out',
    }
  ]
 
  function handleOnClick(items) {
    
  }
 
  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!MyPages)}
        onClick={() => toggle(!MyPages)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title--bold">{title}</p>
        </div>
        <div className="dd-header_action">
          <p>{MyPages ? 'Close My Pages' :'My Pages'}</p>
        </div>
      </div>
      {MyPages && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}

        </ul>
      )}
    </div>
  )  
}

const clickOutsideConfig = {
  handleClickOutside:() => Menu.handleClickOutside
}


export default onClickOutside(Menu, clickOutsideConfig);



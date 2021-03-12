
import React, { useState } from 'react';
import styled from 'styled-components';
//import LeftNav from './LeftNav.js';
import Radium from 'radium';
//import { styled } from '@material-ui/core/styles';

const StyledBurger = styled.div`
  width:2rem;
  height:2em;
  position:fixed;
  top:15px;
  left:20px;
  z-index:20;
  display:none;

   @media (max-width:768px){
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;
  }

  div {
    width:2rem;
    height:0.25rem;
    background-color:${({ open }) => open ? '#ccc' : '#333'};
    border-radius:10px
    &:nth-child(1) {
      transform:${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
     &:nth-child(2) {
      transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      opacity:${({ open }) => open ? 0 : 1}
    }
    &:nth-child(3) {
     transform:${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}



export default Burger(Radium)

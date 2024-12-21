import React from 'react'
import './Footer.css'

export const Footer = () => {
  let footerStyle ={
    position:"relative",
    width: "100%",
    top: "70vh",
    border:"2px Solid red"
  }
  return (
    <div className='bg-dark text-light py-3' style={footerStyle}> 
    <p className='text-center'>Copyright &copy; MyTodosList.com</p></div>
  )
}


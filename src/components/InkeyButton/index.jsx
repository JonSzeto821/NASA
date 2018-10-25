import React from 'react'
import Ink from '../react-ink'
import '../styles/button.css'

const InkeyButton = (props) => {
  return (
    <button className="inkey-btn" onClick={props.onClick} style={{ position: "relative" }}>
      <Ink /> {props.name}
    </button>
  )
}

export default InkeyButton;

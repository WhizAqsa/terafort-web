import React from 'react'
import PropTypes from 'prop-types'
import classes from './Drawer.module.scss'
import { changeAnchor } from './helper'

export const Drawer = (props) => {
  const { open, anchor, onClose, children, leaveMouse } = props
  const {
    drawer,
    animate,
    hidden,
    overlay,
    overlayOpen,
    overlayHidden,
    header,
  } = classes

  return (
    <>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden='true'
      />
      <div
        tabIndex='-1'
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor(anchor, classes)}`}
        onMouseLeave={leaveMouse}
      >
        <div className={header}>
          <p>Menu</p>
          <button onClick={onClose}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>

        {children}
      </div>
    </>
  )
}

Drawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

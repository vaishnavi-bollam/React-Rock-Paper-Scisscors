import React from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

const PopupImageExample = () => (
  <Popup
    trigger={<button aria-label="Open Image">Open Image</button>}
    modal
    closeOnDocumentClick
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close} aria-label="Close">
          <RiCloseLine />
        </button>
        <div className="modal-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt=""
          />
        </div>
      </div>
    )}
  </Popup>
)

export default PopupImageExample

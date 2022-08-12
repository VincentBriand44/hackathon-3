import CloseOutlined from "@mui/icons-material/CloseOutlined";
import React from "react";

function Modal({ isActive }) {
  return (
    <div className="modal">
      <div className="close-modal">
        <CloseOutlined className="icon" onClick={isActive} />
      </div>

      <div className="inputs">
        <input type="text" placeholder="Search" />
        <button className="next-btn">next</button>
      </div>
    </div>
  );
}

export default Modal;

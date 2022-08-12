import React from "react";

function Notification({ showNotification }) {
  return (
    <div>
      <div
        className={`font-semibold text-lg text-white mb-2 block ${
          showNotification ? "show" : ""
        }`}
      >
        <p className="font-semibold text-lg text-white mb-2 block">
          Vous avez déjà saisi cette lettre
        </p>
      </div>
    </div>
  );
}

export default Notification;

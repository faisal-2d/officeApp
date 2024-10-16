import {
  faFacebookMessenger,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MessengerPlugin = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the chat button state
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 right-6 flex flex-col items-center z-50">
      {/* Text that appears when the button is clicked */}
      {isOpen && (
        <div>
          <div
            className="mb-2 p-2 bg-indigo-500 text-white rounded shadow-md cursor-pointer opacity-90"
            onClick={() => window.open("https://m.me/alharamain.ac", "_blank")}
          >
            <FontAwesomeIcon
              className=""
              icon={faFacebookMessenger}
            ></FontAwesomeIcon>{" "}
            Messenger
          </div>
          <div
            className="mb-2 p-2 bg-green-500 text-white rounded shadow-md cursor-pointer opacity-90"
            onClick={() => window.open("https://wa.me/966578621278", "_blank")}
          >
            <FontAwesomeIcon className="" icon={faWhatsapp}></FontAwesomeIcon>{" "}
            WhatsApp
          </div>
          <div
            className="mb-2 p-2 bg-sky-600 text-white rounded shadow-md cursor-pointer opacity-90"
            onClick={() => window.open("https://t.me/+966578621278", "_blank")}
          >
            <FontAwesomeIcon className="" icon={faTelegram}></FontAwesomeIcon>{" "}
            Telegram
          </div>
        </div>
      )}

      {isOpen ? (
        <button
          className="btn btn-circle btn-ghost bg-slate-400 opacity-60"
          onClick={handleClick}
        >
          <FontAwesomeIcon className="text-black" icon={faX}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-full px-4 py-2 shadow-lg hover:from-green-700 hover:to-lime-400 transition duration-700 opacity-90"
          onClick={handleClick}
        >
          <FontAwesomeIcon className="pr-2" icon={faMessage}></FontAwesomeIcon>
          Chat
        </button>
      )}
    </div>
  );
};

export default MessengerPlugin;

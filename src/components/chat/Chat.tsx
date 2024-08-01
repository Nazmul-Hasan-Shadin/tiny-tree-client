import { useEffect, useState } from "react";
import io from "socket.io-client";
import { IoIosSend } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import popUpSound from "../../popupsound.mp3";



// Initialize socket connection
const socket = io("http://localhost:3000");

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<
    {
      message: string;
      isMine: boolean;
    }[]
  >([]);
  const [isVisible, setIsVisible] = useState(true); // State to manage chat visibility

  const handlePlayNotificationSound = () => {
    const messageSound = new Audio(popUpSound);
    messageSound.play();
  };

  useEffect(() => {
    socket.on("message", (receivedMsg) => {
      setChat((prevChat) => {
        const lastMessage = prevChat[prevChat.length - 1];
        if (
          lastMessage &&
          lastMessage.message === receivedMsg &&
          lastMessage.isMine
        ) {
          return prevChat;
        }
        handlePlayNotificationSound();
        return [...prevChat, { message: receivedMsg, isMine: false }];
      });
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const handleSendMessage = () => {
    if (msg.trim()) {
      setChat((prevChat) => [...prevChat, { message: msg, isMine: true }]);
      socket.emit("message", msg);
      setMsg("");
    }
  };

  // send default message when user come

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible) {
        socket.emit(
          "message",
          "Hi! 😊 We’ve been eagerly waiting to chat with you. If there’s anything you need or just want to share, we’re all ears! "
        );
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const handleCancelChat = () => {
    setIsVisible(false); // Hide the chat window
  };

  return (
    <>
      {isVisible ? ( // Render chat only if isVisible is true
        <div className="z-50 fixed bottom-1 right-1 md:right-1 md:bottom-1 h-[384px] w-4/6 md:w-3/12  max-w-lg border border-red-400 bg-white flex flex-col shadow-lg">
          {/* Profile image and cancel icon */}
          <div className="relative flex items-center p-4 bg-primary-green">
            <img
              src="https://avatars.githubusercontent.com/u/111014373?v=4"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="text-lg text-white font-semibold">
              Nazmul Hasan Shadin
            </div>
            <MdCancel
              onClick={handleCancelChat}
              className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {chat.map((msg, index) =>
              msg.isMine ? (
                <div key={index} className="w-full flex justify-end">
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-lg  max-w-xs w-auto text-sm   px-4 bg-primary-green text-white text-right`}
                  >
                    {msg.message}
                  </div>
                </div>
              ) : (
                <div className="w-full flex jusitfy-start">
                  <div
                    style={{ width: "fit-content " }}
                    key={index}
                    className={`mb-2 p-2 rounded-lg max-w-xs  text-sm bg-[#e0e0e0] text-[#000000]  w-auto  text-left`}
                  >
                    {msg.message}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="shadow-inner">
            <div className="flex items-center gap-3 p-3">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="px-4 py-3 w-full md:max-w-xs flex-1 border border-gray-300 rounded-lg"
                type="text"
                placeholder="Send a message..."
              />
              <IoIosSend
                onClick={handleSendMessage}
                className="text-green-700 text-3xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      ) : (
        <FaFacebookMessenger
          onClick={() => setIsVisible(!isVisible)}
          className="fixed bottom-1 z-10 right-1 md:right-10 md:bottom-10 text-5xl text-blue-600 cursor-pointer "
        />
      )}
    </>
  );
};

export default Chat;

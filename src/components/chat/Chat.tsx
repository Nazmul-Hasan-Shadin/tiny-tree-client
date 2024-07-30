import { useEffect, useState } from "react";
import io from "socket.io-client";
import { IoIosSend } from "react-icons/io";

const socket = io("http://localhost:3000");

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<
    {
      message: string;
      isMine: boolean;
    }[]
  >([]);

  useEffect(() => {
    socket.on("message", (receivedMsg) => {
      setChat((prevChat) => {
        const lastMessage = prevChat[prevChat.length - 1];
        if (lastMessage && lastMessage.message === receivedMsg && lastMessage.isMine) {
          return prevChat;
        }
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

  return (
    <div className="z-50 fixed bottom-1 right-1 md:left-1 md:bottom-1 h-[384px] md:w-4/12 w-full max-w-lg border border-red-400 bg-white flex flex-col shadow-lg">
      {/* Profile image */}
      <div className="flex items-center p-4 bg-primary-green">
        <img
          src="https://avatars.githubusercontent.com/u/111014373?v=4"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="text-lg text-white font-semibold">
          Nazmul Hasan Shadin
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-xs ${
              msg.isMine
                ? "bg-green-100 self-end text-right"
                : "bg-gray-100 self-start text-left"
            }`}
            style={{ wordBreak: 'break-word' }}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="shadow-inner">
        <div className="flex items-center gap-3 p-3">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="px-4 py-3 flex-1 border border-gray-300 rounded-lg"
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
  );
};

export default Chat;

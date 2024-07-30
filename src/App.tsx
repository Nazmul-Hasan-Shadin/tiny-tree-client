import { useEffect } from "react";
import Home from "./pages/Home/Home";
import { useAppSelector } from "./redux/hook";
import Chat from "./components/chat/Chat";



const App = () => {



  return (
    <div>
     <Home></Home>
     <Chat></Chat>
     
  
    </div>
  );
};

export default App;
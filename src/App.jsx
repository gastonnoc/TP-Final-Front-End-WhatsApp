import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import SideBar from "./Components/SideBar";
import "./Styles/global.css";
import ChatScreen from "./Screens/ChatScreen";

function App() {
  return (
    <div className="app-container">

      <div className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="homeScreen">
                <SideBar />
                <HomeScreen />
              </div>
            } 
          />
          <Route 
            path="/contact/:contact_id" 
            element={
            <div className="chatScreen">
              <ChatScreen />
            </div>
            } 
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;

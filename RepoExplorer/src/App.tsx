import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

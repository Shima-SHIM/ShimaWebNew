// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<HomePage />} />{" "}
          {/* HomePage içindeki tüm yönlendirmeler burada kontrol edilir */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

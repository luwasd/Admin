import React from "react"
import Main from "./views/Main";
import Detail from "./views/Detail";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


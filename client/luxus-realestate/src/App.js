import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import AddProperty from "./pages/AddProperty";
import SingleProperty from "./pages/SingleProperty";
import CategoryProperties from "./pages/CategoryProperties";
import SignIn from "./pages/SignIn";


const App = () => {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add-property" element={<AddProperty/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/property/:id" element={<SingleProperty/>}/>
            <Route path="/category/:id" element={<CategoryProperties/>}/>
          </Routes>
      </Router>
    </div>
  );
};

export default App;

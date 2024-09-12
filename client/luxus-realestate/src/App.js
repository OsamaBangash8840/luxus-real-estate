import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import AddProperty from "./pages/AddProperty";
import SingleProperty from "./pages/SingleProperty";
import CategoryProperties from "./pages/CategoryProperties";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgetPass from "./components/ForgetPass";
import CategoryDetail from "./components/CategoryDetail";
import Dashboard from "./components/Dashboard/Dashboard";



const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forget-password" element={<ForgetPass />} />
          <Route path="/property/:id" element={<SingleProperty />} />
          <Route path="/category/:id" element={<CategoryProperties />} />
          <Route path="/category/:id" element={<CategoryProperties />} />
          <Route path="/category-detail/:id" element={<CategoryDetail />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

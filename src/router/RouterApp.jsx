import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { PageNotFound } from "../pages/PageNotFound"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { AboutUs } from "../pages/AboutUs"
const RouterApp = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="*" element={ <PageNotFound/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export{ RouterApp }
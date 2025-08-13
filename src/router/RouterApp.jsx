import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { PageNotFound } from "../pages/PageNotFound"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { AboutUs } from "../pages/AboutUs"
import { PrivateRoute } from "../components/PrIvateRoute"
import { Profile } from "../pages/Profile"
const RouterApp = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="*" element={ <PageNotFound/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export{ RouterApp }
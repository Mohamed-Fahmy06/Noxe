
import { Route, Router, Routes } from 'react-router'
import './App.css'
import Homee from "./components/page/Homee"
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

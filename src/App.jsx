
import { Route, Router, Routes } from 'react-router'
import './App.css'
import HomePage from "./components/page/HomePage"
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

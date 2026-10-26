import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer'
import Students from './pages/Students'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <BreadCrumb />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

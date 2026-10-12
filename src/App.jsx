import { useState } from 'react'
import './App.css'
import profile from '../src/assets/profile-image.jpg'
import Navbar from './components/Navbar'
import StudentCard from './components/StudentCard'
import Pagination from './components/Pagination'
import BreadCrumb from './components/BreadCrumb'
import Alert from './components/Alert'
import PageHeader from './components/PageHeader'

function App() {

  return (
    <>
      <Navbar />
      <BreadCrumb />
      <PageHeader />
      <div className="d-flex" style={{gap: "20px"}}>
      <StudentCard student={{
            name: "Jane Doe",
            id: 101,
            major: "Computer Science",
            year: 2,
            gpa: 3.8,
            img: profile,
            email: "abc@gmail.com"
          }}/>
      <StudentCard student={{
            name: "Mary Doe",
            id: 102,
            major: "Computer Science",
            year: 2,
            gpa: 3.8,
            img: profile,
            email: "abc@gmail.com"
          }}/>
      <StudentCard student={{
            name: "Gant Doe",
            id: 103,
            major: "Computer Science",
            year: 2,
            gpa: 3.8,
            img: profile,
            email: "abc@gmail.com"
          }}/>
        <StudentCard student={{
            name: "Amm Doe",
            id: 104,
            major: "Computer Science",
            year: 2,
            gpa: 3.8,
            img: profile,
            email: "abc@gmail.com"
          }}/>
      </div>
      
      <div className="d-flex justify-content-center mt-4">
        <Pagination />
      </div>
      <Alert />
    </>
  )
}

export default App

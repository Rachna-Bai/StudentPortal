import React from 'react'
import { useState } from 'react';

function StudentCard({ student }) {
    const [showDetails, setShowDetails] = useState(false);
    const handleViewDetails = (e) => {
        e.preventDefault();
        setShowDetails(!showDetails);
    };
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
            <img src={student.img} className="card-img-top" alt="..." style={{}} />
            <div className="card-body" style={{textAlign: "left"}}>
                <h5 className="card-title">{student.name}</h5>
                <h6>Student ID: {student.id}</h6>
                <h6>Major: {student.major}</h6>
                {showDetails && (
                    <>
                        <h6>Year: {student.year}</h6>
                        <h6>GPA: {student.gpa}</h6>
                        <h6>Email: {student.email}</h6>
                    </>
                )}
                <div className="d-flex" style={{gap: "10px"}}>
                    <a href="#" className="btn btn-outline-primary" onClick={handleViewDetails}>{showDetails ? "Hide Details" : "Show Details"}</a>
                    <a href="#" className="btn btn-outline-danger">Delete</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default StudentCard

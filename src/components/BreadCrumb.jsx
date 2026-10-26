import React from 'react'

function BreadCrumb() {
  return (
    <>
        <nav aria-label="breadcrumb" className="custom-breadcrumb">
            <ol className="breadcrumb align-items-center">
                <li className="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                    <a href="#">Students</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Directory</a>
                </li>
            </ol>
        </nav>
    </>
  )
}

export default BreadCrumb


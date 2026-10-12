import React from 'react'

function Alert() {
  return (
        <div className="alert alert-success alert-dismissible fade show" role="alert" style={{textAlign: "left"}}>
            Student record has been successfully updated!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

export default Alert

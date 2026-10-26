import React from 'react'

function PageHeader() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid d-flex" style={{justifyContent: "space-between"}}>
                <a class="navbar-brand" href="#">Page Header</a>
                <form class="d-flex">
                    <button className="btn btn-success" type="submit">Add New Profile</button>
                </form>
            </div>
        </nav>
    </>
  )
}

export default PageHeader

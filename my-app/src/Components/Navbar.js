import React from 'react'

function Navbar() {
  return (
    
        <nav class="navbar navbar-expand-lg navbar-light " aria-label='Secondary-Navigation' style={{backgroundColor:"  #a9c3c8"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
         <img src='https://img.icons8.com/?size=100&id=9267&format=png&color=000000' alt='' style={{height:'20px', width:'20px'}} />
        <span>Strike</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Category</a>
        </li>
      </ul>
      {/* <div class="dropdown">
         <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
         </a>

         <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
           <li><a class="dropdown-item" href="#">Action</a></li>
           <li><a class="dropdown-item" href="#">Another action</a></li>
           <li><a class="dropdown-item" href="#">Something else here</a></li>
         </ul>
      </div>        */}
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar
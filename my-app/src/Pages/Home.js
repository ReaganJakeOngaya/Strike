import React from 'react'

function Home() {
  return (
    <div style={{marginTop:'20px', textAlign:'center'}}>
        <img src='https://img.icons8.com/?size=100&id=9267&format=png&color=000000' alt='' style={{height:'50px', width:'50px'}} />
        <h2>Strike</h2>
        <hr></hr>
        <p style={{margin:'90px'}}>Hello world</p>
        <hr></hr>
        <div class="d-grid gap-2 col-6 mx-auto">
           <a href="/login" class="btn btn-primary" role="button" data-bs-toggle="button">Login</a>
           <a href="/signup" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Sign Up </a>
        </div>
    </div>
  )
}

export default Home
import React from 'react'

function Signup() {
  return (
    <div style={{marginTop:"20px", backgroundColor:" #a9c3c8 ", padding:"40px", borderRadius:"20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h5 style={{textAlign:"center"}}>Create Account</h5>
        <hr></hr>
        <form>
           <div class="mb-3">
             <label for="" class="form-label">FirstName:</label>
             <input type="text" class="form-control" placeholder='firstname' />
           </div>
           <div class="mb-3">
              <label for="" class="form-label">LastName:</label>
              <input type="text" class="form-control" placeholder='lastname'/>
           </div> 
           <div class="mb-3">
              <label for="" class="form-label">Email:</label>
              <input type="text" class="form-control" placeholder='name@email.com'/>
           </div> 
           <div class="mb-3">
              <label for="" class="form-label">Set-password:</label>
              <input type="password" class="form-control" />
              <span id="passwordHelpInline" class="form-text">
                 Must be 8-20 characters long.
              </span>
           </div>
           <div class="mb-3">
              <label for="" class="form-label">Confirm-Password:</label>
              <input type="password" class="form-control" />
           </div> 
           <div class="col-12">
              <button type="submit" class="btn btn-primary">Sign Up</button>
           </div>
        </form>
    </div>
  )
}

export default Signup
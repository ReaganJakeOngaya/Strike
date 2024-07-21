import React from 'react'
// import Navbar from '../Components/Navbar'
function Dashboard() {


     const user = localStorage.getItem('user')
     console.log(user)
  return (
    <>
    {/* <Navbar /> */}
    <div style={{textAlign:'center'}}>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[36px]">Dashboard</h1>
            {user && (<h2 className="font-semibold text-[19px]">
              Welcome, {user}
            </h2>)}
        </div>
        <div style={{borderRadius:"20px", backgroundColor:"GrayText",}}>
       
      </div>
    </div>
    </>
  )
}

export default Dashboard

//  <iframe 
//            width="800" 
//            height="480" 
//            src="https://www.youtube.com/embed/_Gcaa7rGKr8?list=RD_Gcaa7rGKr8" 
//            title="Chris Brown, Young Thug - City Girls (Official Video)" 
//            frameborder="0" 
//            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//            referrerpolicy="strict-origin-when-cross-origin" 
//            allowfullscreen>
//         </iframe>
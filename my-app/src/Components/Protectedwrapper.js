import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Protectedwrapper() {
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem('token') || !localStorage.getItem('user')) navigate("/");
    }, []);

  return (
    <div className="px-14">
        <div className="">
//         <Navbar />
//       </div>
    </div>
  )
}

export default Protectedwrapper
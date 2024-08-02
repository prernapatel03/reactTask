import React from "react";
import Edit from "./Components/Edit";
import "./App.css";
import API from "./axios/Axios";
import { useDispatch, useSelector } from "react-redux";
import { spinnerFunction } from "./Redux/dataSlice";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Demo from "./Components/demo";


export default function App() {

  let dispatch = useDispatch();
  let { theme } = useSelector((state) => state.dataSlice);

  document.body.style.backgroundColor = theme ? "#212529" : "white";
  // async function updateFunction(item) {
  //   try {
  //     // if (updateResponse.status) {
  //     //   toast.success("update successfully", {
  //     //     position: "top-right",
  //     //     hideProgressBar: false,
  //     //     closeOnClick: true,
  //     //     pauseOnHover: true,
  //     //     draggable: true,
  //     //     progress: undefined,
  //     //     theme: "dark",
  //     //   });
  //     // } else {
  //     //   toast.error("not update", {
  //     //     position: "top-right",
  //     //     hideProgressBar: false,
  //     //     closeOnClick: true,
  //     //     pauseOnHover: true,
  //     //     draggable: true,
  //     //     progress: undefined,
  //     //     theme: "dark",
  //     //   });
  //     // }
  //   } catch (error) {
  //     console.log("edit ", error);
  //     toast.error("internal server error", {
  //       position: "top-right",
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   }
  // }

  API.interceptors.request.use((req) => {
    dispatch(spinnerFunction('block'))
    return req;
  });

  API.interceptors.response.use((res) => {
    dispatch(spinnerFunction('none'))
    return res;
  });

  // if(spinner === 'block'){
  //    return(
  //     <div
  //     className="spinner-border text-primary"
  //     id="spinner"
  //     role="status"
  //     style={{ display : spinner , position : "absolute" , top : '10%' , left : '50%'}}
  //   ></div>
  //    )
  // }
  // else{
    return (
      <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Edit />} />
          <Route path='/demo' element={ <Demo />} />

        </Routes>
         </BrowserRouter>
      </>
    );

  // }
}

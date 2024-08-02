import "bootstrap/dist/css/bootstrap.min.css";
import Read from "./Read";
import Add from "./Add";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Nav/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { readLoadFunction } from "../Redux/dataSlice";
import Demo from './demo'


function Edit() {
  
  let dispatch = useDispatch();

  return ( 
    <>
      

      <Add />

      <Read />

  
    </>
  );
}

export default Edit;

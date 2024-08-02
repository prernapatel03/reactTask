import React, { useEffect, useRef, useState } from "react";
import img from "./aman.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFunction,
  editDataRequest,
  postDataRequest,
  postDataSuccess,
  readLoadFunction,
} from "../Redux/dataSlice";

export default function Add() {


  let [userDetails, setUserDetails] = useState({
    id: 0,
    name: "",
    email: "",
    phNumber: "",
    password: "",
  });

  let ref = useRef(null);
  let { theme, action, currentItem  } = useSelector((state) => state.dataSlice);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(readLoadFunction());
  }, [dispatch , userDetails]);

  function handleChange(event) {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    if (action && currentItem) {
      setUserDetails(currentItem);
    } else {
      setUserDetails({
        name: "",
        email: "",
        phNumber: "",
        password: "",
      });
    }
  }, [action, currentItem]);

  function handleSubmit(event) {
    event.preventDefault();
    ref.current.focus();
    ref.current.select()
    if (action) {
      try {

        dispatch(editDataRequest(userDetails));
        dispatch(addFunction());
      } catch (error) {}
    } else {
      try {
        
        dispatch(postDataRequest(userDetails));
        dispatch(addFunction());
        

        // console.log('after' , userDetails)
      } catch (error) {
        console.log("error");
      }

      // if (userResponse.status) {
      //   toast.success("register successfully", {
      //     position: "top-right",
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //   });

      //   setUserDetails({
      //     name: "",
      //     email: "",
      //     phNumber: "",
      //     password: "",
      //   });
      // } else {
      //   toast.error("not successfully", {
      //     position: "top-right",
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //   });
      // }
    }
    // dispatch(addFunction());
    // } catch (error) {
    //   console.log("create :", error);
    //   toast.error("internal server error", {
    //     position: "top-right",
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    // }
  }
  return (
    <div
      className={`form-container ${
        theme ? "bg-dark" : "bg-white"
      } container mt-5 mb-5 d-flex`}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <div className="img">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div
        className={` ${
          theme ? "bg-dark text-white " : "bg-white text-dark "
        }reg-container  shadow-lg p-3  rounded`}
        style={{ width: "400px" }}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="text-center mb-3 mt-3">
          <h3>CRUD</h3>
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="form-group mb-3">
            <i className="fa fa-user mt-0 mb-0 m-2"></i>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="exampleFormControlInput1"
              value={userDetails.name}
              onChange={handleChange}
              placeholder="enter your username"
              ref={ref}
            />
          </div>

          <div className="form-group mb-3">
            <i className="fa fa-envelope mt-0 mb-0 m-2"></i>

            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="exampleFormControlInput1"
              value={userDetails.email}
              onChange={handleChange}
              placeholder="xyz@gmail.com"
            />
          </div>

          <div className=" form-group mb-3">
            <i className="fa fa-phone mt-0 mb-0 m-2"></i>

            <label htmlFor="exampleFormControlInput1" className="form-label">
              Ph.number
            </label>
            <input
              className="form-control"
              type="number"
              name="phNumber"
              id="exampleFormControlInput1"
              value={userDetails.phNumber}
              onChange={handleChange}
              placeholder="enter your phone number"
            />
          </div>

          <div className="form-group mb-3">
            <i className="fa fa-key mt-0 mb-0 m-2"></i>

            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="exampleFormControlInput1"
              value={userDetails.password}
              onChange={handleChange}
              placeholder="enter your password"
            />
          </div>

          <div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "100%" }}
            >
              {action ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// name: userDetails.name  , email : userDetails.email , phNumber : userDetails.phNumber , password : userDetails.password ,

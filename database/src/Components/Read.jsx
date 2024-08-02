import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataRequest,
  editFunctionData,
  readLoadFunction,
  readSuccessFunction,
  refernce,
} from "../Redux/dataSlice";

function Read() {
  const dispatch = useDispatch();
  // const ref = useRef(null)

  let { theme, userData } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(readLoadFunction());
  }, [dispatch]);

  function editFunction(item) {
    dispatch(editFunctionData(item));
  }
  
  function deleteFunction(id) {
    try {
      dispatch(deleteDataRequest(id));
      dispatch(readLoadFunction());
    } catch (error) {}

    //  catch (error) {
    //   console.log("delete ", error);
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
      className="table-responsive-md mt-5 container"
      style={{ width: "100%" }}
    >
      <table
        className={`${
          theme ? "table-dark" : "table-white"
        }   table table-striped table-bordered text-center table-hover`}
      >
        <caption className="caption-top text-white fw-bold fs-6">
          {/* <b> */}
          List of users {userData.length}
          {/* </b> */}
        </caption>
        <thead className={`${theme ? "table-dark" : "table-white"}`}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">phoneNumber</th>
            <th scope="col">password</th>
            <th scope="col" colSpan="2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, i) => {
            return (
              <tr className={`${theme ? "table-dark" : "table-white"}`} key={i}>
                <td scope="row">{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phNumber}</td>
                <td>{e.password}</td>

                <td>
                  <button
                    onClick={() => deleteFunction(e.id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    <i className="fa fa-trash"></i>
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => editFunction(e)}
                    className="btn btn-success"
                  >
                    {" "}
                    <i className="fa fa-edit"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Read;

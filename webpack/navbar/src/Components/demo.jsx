import * as React from "react";
// import {useHistory} from 'react-router-dom'

export default function Home() {

  // const history = useHistory();
  // console.log(history)
  return (
     <>
        
     </>
  );
}

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// export default function Home() {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const [usersData, setUsersData] = useState([]);

//   async function fetchData() {
//     const response = await axios.get("http://localhost:3031/users");
//     const data = await response.data;
//     setUsersData(data);
//   }
//   useEffect(() => {
//     // fetchData();
//   }, []);
//   return (
//     <div>
//       {/* <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>{" "}
//       {counter}

//       <br />
//       {usersData.map((e) => {
//         return <p style={{ fontSize : '16px'}}>{e.desciption} <br /></p>;
//       })} */}
//     </div>
//   );
// }

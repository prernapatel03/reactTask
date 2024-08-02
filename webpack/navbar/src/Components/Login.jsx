// import React, { useState } from "react";

// export default function Login({counter}) {
//   const [data, setData] = useState({
//     email: "",
//     password : ""
//   });

//   const [ responseData, setResponseData ] = useState([])

//   function handleChange(event){
//     setData({...data ,  [event.target.name]: event.target.value})
//   }
//   console.log('data' , data)
//   async function handleSubmit(event){
//     event.preventDefault();
//     const response =  await fetch('http://localhost:3039/users');
//     const res = await response.json();
//     setResponseData(res)
//     responseData.filter((e)=>{
//         if(e.counter.email === data.email && e.counter.password === data.password){
//           console.log('email ' , e)
//         }
//       }
//     )
//   }

//   return (
//     <div>
//       <p>login</p>

//       <form action="" onSubmit={handleSubmit}>
//         <input value={data.email} name="email" onChange={handleChange} /> <br />
//         <input
//           value={data.password}
//           name="password"
//           onChange={handleChange}
//         />{" "}
//         <br />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// }

import {useState} from "react";
import { useNavigate } from 'react-router-dom'
import React from "react";

export default function Demo() {
    const navigation = useNavigate()

const [ showData , setShowData ] = useState('none')

function handleClick(){
    setShowData('block')
    if(showData === 'block'){
        navigation('/')
    }
    // else{
    //     console.log('hi2')
    // }

}
  return <>  
   <button onClick={handleClick}>{ showData === 'block' ?  'go to next page' : 'click'}</button>
   <p style={{ display : showData}}>right</p>
  </>
}

// const Demo = ()=>{
//     let [ userdet , setUserDet ] = useState([])
//     let [ user  , setuser ] = useState({
//         lname : '',
//         fname : ''
//     })
//     function handleChange(e){
//          setuser( { ...user , [e.target.name ]: e.target.value})
//          console.log(user)
//     }

//     function handleSubmit(e){
//                 e.preventDefault();
//                 setUserDet(user)
//     }
//     return(
//        <>
//         <form action="" onSubmit={handleSubmit}>
//             <input type="text" name="lname" id="" value={user.lname} onChange={handleChange}/>
//             <input type="text" name="fname" id="" value={user.fname} onChange={handleChange}/>
//             <button type="submit">add</button>
//         </form>

//         <table>
//             <thead>
//                 <tr>
//                     <th>lname</th>
//                     <th>fname</th>
//                 </tr>

//             </thead>
//             <tbody>

// {
//     userdet.map((e , i)=>{

//                 <tr key={i}>
//                     <td>{e.lname}</td>
//                     <td>{e.fname}</td>

//                 </tr>
//     })
// }
//             </tbody>
//         </table>
//        </>
//     )
// }
// export default Demo;

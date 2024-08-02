import React, { useEffect, useState } from "react";

export default function AddTodo({todoList , action , setAction , currentItem , updateItem , addItem}) {

  let [ errors , setErrors ] = useState({});


const [ userDetails , setUserDetails ] = useState(
  {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password : '',
    mobileNo: '',
    age: '',
    // selectHobbies: '',
    address : '',


  }
)

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
useEffect(()=>{

  if(action && currentItem){
    setUserDetails(currentItem)
  }
  else{
    setUserDetails({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password :'',
      mobileNo: '',
      age: '',
      // selectHobbies: '',
      address : '',
    })
  }
} , [action , currentItem])


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserDetails({
    ...userDetails,
    [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = Validation();
  setErrors(newErrors);
  if(Object.keys(newErrors).length > 0){
    console.log('submit')
    return;
  }
  
  if (action) {
    updateItem(userDetails);
  } else {
    addItem(userDetails);
  }

  setUserDetails({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password :'',
    mobileNo: '',
    age: '',
    // selectHobbies: '',
    address : '',
  });
  setAction(false);
};

  function  Validation(){
     const newArray = {}
     const {firstName, lastName, email, password , mobileNo, age, 
      // selectHobbies ,
      address
    } = userDetails;

     if(!firstName){
      newArray.firstName = "firstName is required"
     }
     else if(!lastName){
      newArray.lastName = "lastName is required"

     }

     else if(!emailPattern.test(email)){
       newArray.email = "email is required"
       
      }
      else if(!password){
       newArray.password = "password is required"
 
      }
     else if(!mobileNo){
      newArray.mobileNo = "mobileNo is required"

     }
     else if(!age){
      newArray.age = "age is required"

     }
     else if(!address){
      newArray.age = "address is required"

     }
    //  else if(!selectHobbies){
    //   newArray.selectHobbies = "selectHobbies is required"

    //  }
     return newArray;
  }

  return (
    <>

    <center>
      
    <form onSubmit={handleSubmit}>

<div>
  <h2>User Details</h2>
</div>
<div>

<input
        type="text"
        name="firstName"
        value={userDetails.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
     
</div>
<div className="err">

      {errors && <span className="">{errors.firstName}</span> }
</div>

<div>

      <input
        type="text"
        name="lastName"
        value={userDetails.lastName}
        onChange={handleInputChange}
        placeholder="LastName"
      />
</div>

{errors && <span className="err">{errors.lastName}</span> }

<div>

      <input
        type="email"
        name="email"
        value={userDetails.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
</div>

{errors && <span className="err">{errors.email}</span> }

<div>

      <input
        type="password"
        name="password"
        value={userDetails.password}
        onChange={handleInputChange}
        placeholder="password"
      />
</div>

{errors && <span className="err">{errors.password}</span> }
<div>

      <input
        type="number"
        name="mobileNo"
        value={userDetails.mobileNo}
        onChange={handleInputChange}
        placeholder="Ph.Number"
      />
</div>
{errors && <span className="err">{errors.mobileNo}</span> }
<div>

      <input
        type="number"
        name="age"
        value={userDetails.age}
        onChange={handleInputChange}
        placeholder="age"
      />
</div>
{errors && <span className="err">{errors.age}</span> }


 <div>

<textarea name="address" value={userDetails.address}    onChange={handleInputChange}
        placeholder="address"></textarea>

</div>
{errors && <span className="err">{errors.address}</span> } 


      {/*
       <div onChange={()=>setGender(e.target.che)} value={gender}>
    <input type="radio" id='female' name='gender'/>
    <input type="radio" id='male' name='gender'/>

</div> */}

{/* <div>

      <select
        name="selectHobbies"
        value={userDetails.selectHobbies}
        onChange={handleInputChange}
      >
        <option value="Drawing">Drawing</option>
        <option value="Playing">Playing</option>
        <option value="Dancing">Dancing</option>
      </select>
</div>
{errors && <span className="err">{errors.selectHobbies}</span> } */}

<div>
      <button type="submit"> {
        action ?
        
        'Update' :
       `Add`
      }
   
      </button>

</div>

      </form>

      <h3> total number of data :
     { todoList.length}</h3> 
    
    </center>
    </>
  );
}

import React from 'react'

export default function ReadTodo({todoList , handleClickDelete , editData}) {
  return (
        
    <>
    <div style={{overflow : 'auto'}}>
<center>  

      <table>
        <thead className='thead'>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>password</th>
            <th>Pho.Number</th>
            <th>Age</th>
            <th>Address</th>
            {/* <th>Hobbies</th> */}
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
     
          {todoList.map((todo) => {
         
            return (
              <>

<tr key={todo.id}>
       <td>{todo.id}</td>
       <td>{todo.firstName}</td>
       <td>{todo.lastName}</td>
       <td>{todo.email}</td>
       <td>{todo.password}</td>
       <td>{todo.mobileNo}</td>
       <td>{todo.age}</td>
       <td>{todo.address}</td>
       {/* <td>{todo.selectHobbies}</td> */}

       <td>
       
        <button className="actionButton" onClick={() =>editData(todo)}><i className='fa fa-edit'></i></button>

       </td>
       <td>
        <button  className="actionButton actionDelete"onClick={() => handleClickDelete(todo.id)}><i className='fa fa-trash'></i></button>

       </td>

       </tr>
              </>
            );
          })}
        </tbody>
      </table>

 

  
</center>
</div>
 
    </>
  )
}

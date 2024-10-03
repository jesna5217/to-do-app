import React, { useEffect, useState } from 'react'
import './Folder.css'
import { addToDo, deleteToDo, toggleToDo, updateToDo } from '../Redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Folder() {
    const [input,setInput]=useState('');
    const toDoList=useSelector((state)=>state.todoReducer);
    const [editId,setEditId]=useState(null);
    const [editValue,setEditValue]=useState('')
    const dispatch=useDispatch()

    const handleToDoList=()=>{
if(input.trim()){
    const date=new Date();
    const index=date.getTime()
const data={
    id:index,
    value:input,
    completed:false
}


    dispatch(addToDo(data));
    setInput('')
}
console.log('to do list',toDoList)  
    }

    const handleEdit=(item)=>{
        setEditId(item.id);
      setEditValue(item.value);//set old as default
    }

    const handleSave=(id)=>{
        dispatch(updateToDo({id:id,value:editValue}));
        setEditId(null)
    }
    useEffect(()=>{
       localStorage.setItem('todos',JSON.stringify(toDoList)) 
    },[toDoList])
 console.log(toDoList);
  
    
  return (
    <>

<div className="folder-grid w-100 ">

<input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  placeholder='Enter a quick task here' className='input-column'/>

<button className='tick' onClick={handleToDoList}><i class="fa-solid fa-plus"></i></button>


{
    toDoList.length>0?(

    <ul style={{listStyle:'none'}}>
        {
    toDoList.map(item=>(
        <div className='list shadow '> 
               <Checkbox {...label} checked={item.completed} color="default"  onClick={()=>dispatch(toggleToDo(item.id))}/>
{
editId===item.id?<div>
<input placeholder='edit' onChange={(e)=>setEditValue(e.target.value)} value={editValue} className='edit-input'/> 
</div>:
  <div className='text-box'>  <li className='text'>{item.value}</li></div>

}
{
editId===item.id?
<button className='edit'><i class="fa-solid fa-check" onClick={()=>handleSave(item.id)}></i></button>:
<button className='edit pen'><i class="fa-regular fa-pen-to-square" onClick={()=>handleEdit(item)}></i></button>



}


    <button className='trash' onClick={()=>dispatch(deleteToDo(item.id))} > <i class="fa-solid fa-trash"></i></button>
    </div>
    
 ))
}
    </ul>


    ):<div><img src="" alt="" className='image'/>
<p style={{color:'white'}} className='your'>Your List Is Empty!📃</p>
</div>

}

</div>


    </>
  )
}

export default Folder
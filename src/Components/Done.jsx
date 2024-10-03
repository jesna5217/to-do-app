import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { deleteToDo, toggleToDo } from '../Redux/todoSlice';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Done() {
    const dispatch=useDispatch()
    const list=useSelector((state)=>state.todoReducer);
    console.log(list);
    const completedList=list.filter(item=>item.completed===true)
  return (
    <>

    <div className="folder-grid">

  
    {
        
        <ul style={{listStyle:'none'}}>
      {
        completedList.map((item)=>(
            <div className="list">
                <Checkbox className='pink'
        {...label}
    
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} onChange ={()=>dispatch(toggleToDo(item.id))} checked={item.completed}
      />
            <li className='text '>{item.value}</li>
    <button className='trash' onClick={()=>dispatch(deleteToDo(item.id))} > <i class="fa-solid fa-trash"></i></button>

            </div>
        ))
      }            
        </ul>
    }


</div>

    
    </>
  )
}

export default Done
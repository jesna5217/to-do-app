import React, { useState } from 'react'
import './Header.css'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAllToDo } from '../Redux/todoSlice';


function Header() {

   const dispatch=useDispatch()
  return (
<header>
<Menu menuButton={<i class="fa-solid fa-sort sort"></i>} transition>
  
     <Link to={'/done'} style={{textDecoration:'none',color:"#113f67"}}> <MenuItem>COMPLETED</MenuItem></Link>
      
      <Link to={'/not'} style={{textDecoration:'none',color:"#113f67"}}><MenuItem>NOT COMPLETED</MenuItem></Link>

    </Menu>


<div className='heading'><p>
  TO DO LIST✍️
   </p> 
</div>
<div className="d-flex options" >
<i className='fa-solid fa-trash  delete' style={{color:'rgb(172, 35, 35)'}} onClick={()=>dispatch(deleteAllToDo())}></i>
<Link to={'/'} style={{textDecoration:'none',color:'#f4eeff'}}><i class="fa-solid fa-house house"></i></Link>

</div>

</header>
  )
}

export default Header
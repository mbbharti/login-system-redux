import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../components/logout.css'
import { logout, selectUser } from '../features/userSlice'

const Logout = () => {
    const user=useSelector(selectUser);
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div className="logout">
            <h1 >
                Welcome <span className="user__name">{user.name}</span>
            </h1>
                <button className="logout__button" onClick = {(e)=>handleClick(e)} >Logout</button>
        </div>
    )
}

export default Logout

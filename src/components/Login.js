import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import '../components/login.css'
import { login } from '../features/userSlice';

const Login = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();

    const handleEvent = (e)=>{
        e.preventDefault();
        dispatch(
            login({
                name:name,
                password:password,
                email:email,
                loggedIn:true,
            })
        )
    }

    return (
        <div className='login'>
            <form  className="login__form" onSubmit = {(e)=>handleEvent(e)} >
                <h1>Login Here</h1>
                <input type="name" placeholder="Enter Your Name" value={name} onChange={(e)=> setName(e.target.value) } />

                <input type="password" placeholder="Enter Your Password" value={password} onChange={(e)=> setPassword(e.target.value) } />

                <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value) } />
                <button className="submit__btn" type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default Login

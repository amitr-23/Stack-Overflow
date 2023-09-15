import React, {useState} from 'react'
import icon from '../../assets/icon.png'
import './Auth.css'
import AboutAuth from './AboutAuth'
import {login,signup} from '../../actions/auth'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
const Auth = () => {
    const[isSignup,setisSignup]=useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelSwitch=()=>{
        setisSignup(!isSignup);
        setName('');
        setEmail('');
        setPassword('');
    };
    const handelSubmit=(e)=>{
        e.preventDefault();
        if(!email || !password){
            alert("Please enter email and password")
        }
        if(isSignup){
            if(!name){
                alert("Please enter name")
            }
            dispatch(signup({name,email,password},navigate));
        }else{
            dispatch(login({email,password},navigate));
        }
    };
  return (
    <section class="auth-section">
        {isSignup && <AboutAuth/>}
        <div class="auth-container-2">
            {!isSignup && <img src={icon} alt='stack overflow' className='login-logo'/> }
            <form onSubmit={handelSubmit}>
                {
                    isSignup && (
                        <label htmlFor='name'>
                            <h4>Name</h4>
                            <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
                </label>
                <label htmlFor="password" >
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    { !isSignup && <p style={{color:"#007ac6", fontSize:"13px"}}>Forgot Password?</p>}
                    </div>
                    <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    { isSignup && (<p style={{color:"#666767", fontSize:"13px"}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number.</p>)}
                </label>
                { isSignup && (<label htmlFor='check'>
                    <input type='checkbox' id='check'/>
                    <p style={{fontSize:"13px"}}>Opt-in to receive occasional product <br/>updates, user research invitations, company <br/>announcements, and digests.</p>
                </label>)}
                <button type="submit" className="auth-btn" >{isSignup? "Sign Up":"Log in" }</button>
                {isSignup && (<p style={{color:"#666767", fontSize:"13px"}}>By clicking “Sign up”, you agree to our 
                    <span style={{color:"#007ac6"}}>terms of <br/>service</span> 
                    and acknowledge that you have read and <br/>understand our 
                    <span style={{color:"#007ac6"}}>privacy policy</span> and 
                    <span style={{color:"#007ac6"}}>code of <br/>conduct.</span></p>)}
            </form>
            <p>
                {isSignup? " Already have an account " : " Don't have an account "}
                <button type="button" className="handel-switch-btn" onClick={handelSwitch} >{isSignup? "Log in":"Sign Up"}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth
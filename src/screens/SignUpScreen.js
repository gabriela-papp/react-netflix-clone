import React,{useRef} from 'react'
import {auth} from '../firebase'
import './SignUpScreen.css'

function SingUpScreen() {
    const emailRef=useRef(null)
    const passwordRef=useRef(null)

    const register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{

        })
        .catch((error)=>{
            alert(error.mesage)
        })
    }
    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email'
                ref={emailRef}/>
                <input type="password" placeholder='Password'
                ref={passwordRef}/>
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signScreen_gray'>New to Netflix? </span>
                    <span className='signupScreen_link' onClick={register}>Sign Up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SingUpScreen

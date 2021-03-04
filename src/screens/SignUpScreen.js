import React from 'react'
import './SignUpScreen.css'

function SingUpScreen() {
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button type='submit'>Sign In</button>
                <h4><span className='signScreen_gray'>New to Netflix? </span><span className='signupScreen_link'>Sign Up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SingUpScreen

import React,{useState} from 'react'
import SignUpScreen from './SignUpScreen'
import './LoginScreen.css'

function LoginScreen() {
    const [signIn,setSingIn]=useState(false)
    return (
        <div className='loginScreen'>
            <div className="loginScreen_background">
                <img className='loginScreen_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <button className="loginScreen_button" onClick={()=>setSingIn(true)}>Sign In</button>
                <div className="loginScreen_gradient"></div>
            </div>
            <div className="loginScreen_body">
                {signIn ?(
                    <SignUpScreen/>
                ):(
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen_input">
                                <form>
                                    <input type="email" placeholder='email address' />
                                    <button onClick={() => setSingIn(true)} className="loginScreen_getStarted">GET STARTED</button>
                                </form>
                            </div>
                        </>
                )}
             
            </div>
        </div>
    )
}

export default LoginScreen

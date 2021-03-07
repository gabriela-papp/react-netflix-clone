import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)
    const history=useHistory()

    const transitionNavBar=() => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else { handleShow(false) }
        }

        useEffect(()=>{
            window.addEventListener('scroll',transitionNavBar)
            return()=>{
                window.removeEventListener('scroll',transitionNavBar)
            }
        })

      
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                onClick={() => { history.push('/') }}
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="netflix Logo" 
                className='nav_logo' />   
            <img 
                onClick={()=>{history.push('/profile')}}
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                alt="avatar logo" 
                className='avatar_logo'/>
        </div>
    )
}

export default Nav

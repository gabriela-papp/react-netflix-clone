import React,{useEffect} from 'react';
import HomeScreen from './screens/HomeScreen'
import './App.css';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {auth} from './firebase'
import {useDispatch, useSelector} from 'react-redux'
import {logout,login,selectUser} from
'./features/counter/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        dispatch(logout)
      }
    })
    return unsubscribe
  },[])
  return (
    <div className="App">  
    <Router>
      {!user ? (
        <LoginScreen/>
      ):(
            <Switch>
              <Route path='/profile'>
                <ProfileScreen />
              </Route>
              <Route exact path='/'>
                <HomeScreen />
              </Route>
            </Switch>
      )}
      
      
    </Router>
    </div>
  );
}

export default App;

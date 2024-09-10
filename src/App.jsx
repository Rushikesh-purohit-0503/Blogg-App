import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from "react-redux"
import authService from "./appwrite/authentication/auth"
import {login,logout} from "./store/AuthSlice/authSlice"
import {Header,Footer} from "./components"
import {Outlet} from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-200'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App

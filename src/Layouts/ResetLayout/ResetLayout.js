import React,{history} from 'react'
import Reset from '../../components/Reset/Reset'
import "./ResetLayout.css"
const ResetLayout = () => {
    const handleClick = ( )=>{
        history.push("/")
    }
  return (
    <div className='AuthLayout'>
        <div className='auth-logo'>
            <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png' alt='SomeImage'/>
        </div>
      <Reset/>
        
        
        <p className='reset_p'>Login?</p>
    </div>
  )
}

export default ResetLayout
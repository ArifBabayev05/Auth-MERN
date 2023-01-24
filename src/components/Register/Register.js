import React,{useState} from 'react'
import "./Register.css"
import { MdVisibility } from "react-icons/md"
import { MdVisibilityOff } from "react-icons/md"
import Input from '../Input/Input'
const Register = () => {
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <form className='Register'>
            <Input type="text" text="Name" />
            <Input type="text" text="Email" />
            <Input type={visible ? "text" : "password"} icon={
                visible ? <MdVisibility /> : <MdVisibilityOff />
            } text="Password" handleClick={handleClick} />

            <Input type={visible ? "text" : "password"} 
            icon={ visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Confirm Password" handleClick={handleClick} />
            <div className='login_btn'>
                <button>Register</button>
            </div>
        </form>
    )
}

export default Register
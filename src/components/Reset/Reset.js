import React, { useState } from 'react'
import Input from '../Input/Input'
import { MdVisibility } from "react-icons/md"
import { MdVisibilityOff } from "react-icons/md"
const Reset = () => {
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <form className='Reset'>
            <Input type={visible ? "text" : "password"} icon={
                visible ? <MdVisibility /> : <MdVisibilityOff />
            } text="Password"
                handleClick={handleClick} />
                
            <Input type={visible ? "text" : "password"} icon={
                visible ? <MdVisibility /> : <MdVisibilityOff />
            } text="Confirm Password"
                handleClick={handleClick} />
            <div className='login_btn'>
                <button>Reset</button>
            </div>
        </form>
    )
}

export default Reset
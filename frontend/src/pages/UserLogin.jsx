import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(formData)
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, formData)
        if (response.status === 200) {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            navigate('/')
        }
        setFormData({
            email: '',
            password: ''
        })
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        type='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value })
                        }}
                        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                    />
                    <h3 className='text-lg font-medium mb-2'>What's your password</h3>
                    <input
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={formData.password}
                        onChange={(e) => {
                            setFormData({ ...formData, password: e.target.value })
                        }}
                        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                    />
                    <button className='bg-green-600 py-3 items-center justify-center flex rounded mt-2 text-white w-full'>Login</button>
                </form>
                <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
            </div>
            <div>
                <Link
                    to='/captain-login'
                    className='bg-[#10b461] flex items-center justify-center text-white mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                >Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin

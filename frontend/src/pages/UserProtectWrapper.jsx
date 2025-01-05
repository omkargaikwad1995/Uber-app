import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({ children }) => {

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    })
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper

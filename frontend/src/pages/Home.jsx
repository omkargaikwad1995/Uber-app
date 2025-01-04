import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8)] w-full pt-10 h-screen flex flex-col justify-between bg-red-400'>
            <img className='w-16 ml-8' src='https://w7.pngwing.com/pngs/567/356/png-transparent-uber-logo-decal-lyft-business-text-people-logo-thumbnail.png'></img>
            <div className='bg-white py-4 px-4 w-full'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to="/login" className='bg-black py-3 items-center justify-center flex rounded mt-2 text-white w-full'>Continue</Link>
            </div>
        </div>
    )
}

export default Home

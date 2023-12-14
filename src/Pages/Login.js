import React, {useState} from 'react'
import Nivaran from '../Assets/Images/Nivaran.png'
import 'react-phone-number-input/style.css'
import 'tailwindcss/tailwind.css'; 

const Login = () => {
    return (
        <div className='w-screen'>
            <section className="shadow-emerald-700 h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">

                <div className='flex flex-row justify-around p-4 items-center content-center bg-primary-500'>

                    <div className="md:w-1/3 max-w-sm justify-center items-center p-2"> 
                        <img src={Nivaran} alt="Sample image" className='rounded-full'/> 
                    </div>

                    <div className="md:w-2/3 max-w-sm p-4">

                        <div className='flex flex-col'>
                            <input className="text-sm px-2 py-2 border border-solid border-gray-300 rounded" type='number' placeholder="Mobile Number" />
                            <input className="text-sm px-2 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
                        </div>

                        <div className="mt-4 flex justify-between font-semibold text-sm">

                            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer"> <input className="mr-1" type="checkbox" /> <span>Remember Me</span> </label>

                            <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
                        </div>

                        <div className="text-center md:text-left">
                            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit"> Login </button>
                        </div>
                        
                        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                            Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login

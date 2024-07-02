import React from 'react'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

const page = () => {
  return (
    <>
    <Nav/>
   <div className='d-flex p-5'>
      <div className='container p-5'>
           <h3 className='ms-5'>Log in to your Account</h3>
           <div className='col-5 ms-5'>
               <div>
                   <label htmlFor="">Username</label>
                   <input type="name" className='form-control btn btn-outline-primary' />
               </div>
               <div>
                   <label htmlFor="">Password</label>
                   <input type="password" className='form-control btn btn-outline-primary' />
               </div>
               <div className='d-flex gap-5'>
                   <p>Remember me</p>
                   <p>forget password?</p>
               </div>
               <div className=''>
               <button className='btn btn-primary col-12'>Log in</button>
               </div>
           </div>
           <div className='d-flex gap-5 p-3 ms-5'>
               <p>Don't have an account</p>
               <Link href='/signin'>Sign Up</Link>
           </div>
       </div>
       <div className=''>
           <img src="image 249.png" alt="" />
       </div>
    </div>
    </>
  )
}

export default page
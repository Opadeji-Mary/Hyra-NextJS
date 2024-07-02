import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '@/app/components/Nav'

const Page = () => {
  return (
    <div>
        <Nav/>
        <div className='container d-flex p-5 col-12'>
           <div className='col-6 container-fluid p-4'>
               <div className='row'>
                   <h3 className='fs-20'>Create an Account</h3>

                   <div className='col-10'>
                       <form action="">
                            <div>
                                <label htmlFor="">Name</label>   
                                <input className='form-control btn btn-outline-warning' type="name" />
                              </div>

                              <div>
                                 <label htmlFor="">Email/Phone Number</label>
                                 <input className='form-control btn btn-outline-warning' type="email/number" />
                              </div>

                              <div>
                                  <label htmlFor="">Username</label>
                                  <input className='form-control btn btn-outline-warning' type="name" />
                              </div>

                              <div>
                                  <label htmlFor="">Password</label>
                                  <input className='form-control btn btn-outline-warning' type="password" />
                              </div> 

                              <div>
                                 <label htmlFor="">Confirm Password</label>
                                 <input className='form-control btn btn-outline-warning' type="password" />
                            </div> <br />

                           <div className=''>
                              <button className='btn btn-warning col-12'>Sign Up</button>
                           </div> <br />

                           <div>
                             <button className='btn btn-outline-warning col-12'>Continue with Google</button>
                           </div>

                       </form>

                   </div>
               </div>
           </div>
           <div className='row row-cols-1'>
            <img src="image 249.png" alt="" />
           </div>
       </div>
    </div>
  )
}

export default Page
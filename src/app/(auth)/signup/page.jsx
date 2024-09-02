import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import { useFormik } from 'formik'


const Page = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword:"",
    }
  })
  console.log(formik.initialValues)
























  // const formik = useFormik({
    // initialValues: {
    //   name: "",
    //   email: "",
    //   userName: "",
    //   password: "",
    //   confirmPassword:"",
    // },
  //   validationSchema: Yup.object({
  //     userName: Yup.string()
  //     .max(15, "Must be 15 characters or less")
  //       .required("Input name"),
  //     email: Yup.string()
  //       .matches(
  //         /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  //         "Email must contain @ and .com"
  //       )
  //       .required("Email cannot be empty")
  //       .min(8, "Password must have atleast 8 Charaters."),
  //       userName: Yup.string()
  //       .max(500, "Must be 500 characters or less")
  //       .required("Required"),
  //     password: Yup.string()
  //       .matches(
  //         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
  //         "Password must contain atleast 1 lowercase, 1 uppercase, 1 number and 1 special character."
  //       )
  //       .min(8, "Password must have atleast 8 Charaters.")
  //       .required("Password cannot be empty."),
  //     confirmPassword: Yup.string()
  //       .oneOf([Yup.ref("password"), null], "password most match")
  //       .required("Password cannot be empty."),
  //     }),
  //     onSubmit: (values) => {
  //       // alert(JSON.stringify(values, null, 2));
  //       axios.post("api/user/signup", values).then((data)=>{
  //         console.log(data);
  //         if(data.status == 200){
  //           toast.success("Sign up successful", {
  //             hideProgressBar: false
  //           })
  //           setTimeout(() => {
  //             router.push('/login')
  //           }, 5000);
  //         }
  //       })
  //       .catch((err)=>{
  //         console.log(err);
  //       })
  //     },
  //   });
  //   console.log(formik);


  return (
    <>
        <Nav/>
        <div className='container d-flex p-5 col-12'>
           <div className='col-6 container-fluid p-4'>
               <div className='row'>
                   <h3 className='fs-20'>Create an Account</h3>

                   <div className='col-10 col-md-6 order-md-2'>
                       <form className='' action="POST">
                            <div>
                                <label htmlFor="">Name</label>   
                                <input 
                                name="name" 
                                className='form-control-lg btn btn-outline-warning' 
                                type="name"

                                
                                />
                              </div>

                              <div>
                                 <label htmlFor="">Email/Phone Number</label>
                                 <input 
                                 name="email" 
                                 className='form-control-lg btn btn-outline-warning' 
                                 type="email/number" />
                             
                             {/* <input    placeholder="Email/Phone number"
                  type="email"
                  name="email"
                  class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700  h-12 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                /> */}
                              </div>

                              <div>
                                  <label htmlFor="">Username</label>
                                  <input 
                                  name="userName" 
                                  className='form-control-lg btn btn-outline-warning' type="name" />
                              </div>

                              <div>
                                  <label htmlFor="">Password</label>
                                  <input 
                                  name="password" 
                                  className='form-control-lg btn btn-outline-warning' type="password" />
                              </div> 

                              <div>
                                 <label htmlFor="">Confirm Password</label>
                                 <input 
                                 name="confirmPassword"  
                                 className='form-control-lg btn btn-outline-warning' type="password" />
                            </div> 
                            
                            <br />

                           <div className=''>
                              <button 
                              className='btn btn-warning col-12'>Sign Up</button>
                           </div> 
                           
                           <br />

                           <div>
                             <button 
                             type="submit" 
                             className='btn btn-outline-warning col-12'>Continue with Google</button>
                           </div>

                       </form>

                   </div>
               </div>
           </div>
           <div className=''>
            <div className='col-md-none'>
            <img className='image-fluid' src="image 249.png" alt="" />
            </div>
           </div>
       </div>
       <Footer/>
    </>
  )
}

export default Page
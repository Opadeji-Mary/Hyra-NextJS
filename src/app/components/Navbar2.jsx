import React from 'react'
import Link from 'next/link'

const Navbar2 = () => {
  return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-relative">
      <div class="container-fluid">
      <h1 class="navbar-brand text-primary">Hyra</h1>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
    <div class="collapse navbar-collapse" id="navbarText">
     <ul class="navbar-nav container-fluid justify-content-center me-auto mb-lg-0">
        <li class="nav-item">
        <Link href="/home" class="nav-link active text-primary" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
        <Link href="/teaching" class="nav-link active" >Our Teaching</Link>
        </li>
        <li class="nav-item">
          <Link href="/aboutus" className='nav-link active'>About Us</Link>
        </li>
      </ul>
    </div>
    <div class="">
        <button className='btn btn-primary'>Download Now</button>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Navbar2
import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
         <h1 class="navbar-brand text-primary" href="#">Hyra</h1>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
    <div class="collapse navbar-collapse" id="navbarText">
     <ul class="navbar-nav container-fluid justify-content-center me-auto mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-primary" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Our Teaching</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About Us</a>
        </li>
      </ul>
    </div>
    <nav class="navbar bg-body-tertiary">
     <form class="container-fluid justify-content-start">
       <button class="btn btn-sm btn-outline-primary me-2" type="button">Sign Up</button>
       <button class="btn btn-sm btn-primary" type="button">Log In</button>
     </form>
    </nav>
  </div>
</nav>
</div>
  )
}

export default Nav
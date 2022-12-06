import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link" 

const Header = () => {
  return (
   <nav>
    <h1><b> TechyStar.</b></h1>
    <main>
        <HashLink to={"/#home"}><b> Home </b></HashLink>
        <Link to={"/contact"}><b>Contact</b></Link>
        <HashLink to={"/#about"}><b>About</b></HashLink>
        <HashLink to={"/#brands"}><b>Brands</b></HashLink> 
        <Link to={"/services"}><b>Services</b></Link>
    </main>



   </nav>
  )
}

export default Header
'use client';
import { Navbar } from 'flowbite-react';
import logo from "../assets/logo.jpg";
import { Link, useLocation } from 'react-router-dom';


export default function NavbarWithDropdown() {
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <Navbar rounded className='shadow-lg fixed top-0 right-0 left-0 z-20 '>
            <Navbar.Brand href="/">
                <img alt="Logo" className="mr-3 h-6 sm:h-9" src={logo} />
            </Navbar.Brand>

            <div>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active={currentPath == "/"}  >  <Link to={"/"}> Home</Link> </Navbar.Link>
                <Navbar.Link active={currentPath == "/all-books"}>  <Link to={"/all-books"}> Books</Link> </Navbar.Link>
                <Navbar.Link active={currentPath == "/add-book"}>  <Link to={"/add-book"}> Add Book</Link> </Navbar.Link>
                <Navbar.Link active={currentPath == "/signup"}>  <Link to={"/signup"}> SignUp</Link> </Navbar.Link>
                <Navbar.Link active={currentPath == "/login"}>  <Link to={"/login"}> Login</Link> </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    )
}



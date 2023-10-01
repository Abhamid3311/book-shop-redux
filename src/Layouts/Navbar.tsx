'use client';
import { Navbar } from 'flowbite-react';
import logo from "../assets/logo.jpg";
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { setUser } from '@/redux/features/user/userSlice';


export default function NavbarWithDropdown() {
    const location = useLocation();
    const currentPath = location.pathname;
    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        })
    }



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


                {
                    user.email ? <Navbar.Link onClick={() => handleLogout()}>Logout</Navbar.Link> :
                        <>
                            <Navbar.Link active={currentPath == "/signup"}>  <Link to={"/signup"}> SignUp</Link> </Navbar.Link>
                            <Navbar.Link active={currentPath == "/login"}>  <Link to={"/login"}> Login</Link> </Navbar.Link>
                        </>

                }


            </Navbar.Collapse>
        </Navbar>
    )
}



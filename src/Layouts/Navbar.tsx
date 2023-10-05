'use client';
import { Badge, Navbar } from 'flowbite-react';
import logo from "../assets/logo.jpg";
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { setUser } from '@/redux/features/user/userSlice';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';


export default function NavbarWithDropdown() {
    const location = useLocation();
    const currentPath = location.pathname;
    const { user } = useAppSelector(state => state.user);
    const { books } = useAppSelector(state => state.wishlist);
   

    const dispatch = useAppDispatch();




    //Handle Logout
    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        })
    }



    return (
        <Navbar rounded className='shadow-lg fixed top-0 right-0 left-0 z-20 text-lg font-bold'>
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
                <Navbar.Link active={currentPath == "/about-us"}>  <Link to={"/about-us"}> About Us</Link> </Navbar.Link>
                <Navbar.Link active={currentPath == "/contacts"}>  <Link to={"/contacts"}> Contacts</Link> </Navbar.Link>
                <Navbar.Link active={currentPath == "/Wishlist"}>  <Link to={"/Wishlist"}>
                    <Badge icon={BsFillBookmarkHeartFill} color="failure" >
                        {books?.length}
                    </Badge>
                </Link> </Navbar.Link>


                {
                    user.email ? <Navbar.Link onClick={() => handleLogout()} className='cursor-pointer '>Logout</Navbar.Link> :
                        <>
                            <Navbar.Link active={currentPath == "/signup"}>  <Link to={"/signup"}> SignUp</Link> </Navbar.Link>
                            <Navbar.Link active={currentPath == "/login"}>  <Link to={"/login"}> Login</Link> </Navbar.Link>
                        </>

                }


            </Navbar.Collapse>
        </Navbar>
    )
}



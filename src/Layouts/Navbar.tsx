'use client';

import { Navbar } from 'flowbite-react';
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite';
import { Item } from '@radix-ui/react-dropdown-menu';

export default function NavbarWithDropdown() {
    return (
        <Navbar rounded className='shadow-lg fixed top-0 right-0 left-0 z-20 '>
            <Navbar.Brand href="/">
                <img alt="Logo" className="mr-3 h-6 sm:h-9" src={logo} />
            </Navbar.Brand>


            {/*   <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={<p>User</p>}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Item>
                        Dashboard
                    </Item>
                    <Item>
                        Settings
                    </Item>
                    <Item>
                        Earnings
                    </Item>
                    <Dropdown.Divider />
                    <Item>
                        Sign out
                    </Item>
                </Dropdown>


                <Navbar.Toggle />
            </div> */}

            <div>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active  >  <Link to={"/"}> Home</Link> </Navbar.Link>
                <Navbar.Link >  <Link to={"/all-books"}> Books</Link> </Navbar.Link>
                <Navbar.Link >  <Link to={"/add-book"}> Add Book</Link> </Navbar.Link>
                <Navbar.Link >  <Link to={"/signup"}> SignUp</Link> </Navbar.Link>
                <Navbar.Link >  <Link to={"/login"}> Login</Link> </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    )
}



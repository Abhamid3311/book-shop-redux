'use client';

import { Footer } from 'flowbite-react';
import logo from "../assets/logo.jpg";

export default function FooterWithLogo() {
    return (
        <Footer container className='bg-[#1B8BCB] text-white'>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        alt=" Logo"
                        href="/"
                        src={logo}
                    />
                    <Footer.LinkGroup className='text-white'>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright className='text-white'
                    by="Book Shop"
                    href="#"
                    year={2023}
                />
            </div>
        </Footer>
    )
}



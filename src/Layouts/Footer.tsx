'use client';

import { Footer } from 'flowbite-react';
import logo from "../assets/logo.jpg";

export default function FooterWithLogo() {
    return (
        <Footer container className=' bg-white px-5'>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        alt=" Logo"
                        href="/"
                        src={logo}
                    />
                    <Footer.LinkGroup className=''>
                        <Footer.Link href="/about-us">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="/contacts">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright className=''
                    by="Book Shop || All right reserved"
                    href="#"
                    year={2023}
                />
            </div>
        </Footer>
    )
}



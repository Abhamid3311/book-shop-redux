import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

export default function SignUp() {
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-0 ">
            <Link to={'/'}>  <img src={logo} alt="logo" srcSet="" className="w-32  mt-2" /></Link>

            <div className="flex flex-col items-center justify-center max-w-3xl mx-auto h-full p-5 bg-gray-200 m-5 my-10 rounded-[5px]">
                <h1 className="text-3xl font-bold ">Register</h1>
                <form className="flex  flex-col gap-4 w-full">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput
                            id="email2"
                            placeholder="name@abc.com"
                            required
                            shadow
                            type="email"
                        />
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput
                            id="password2"
                            placeholder="********"
                            required
                            shadow
                            type="password"
                        />
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <TextInput
                            id="repeat-password"
                            placeholder="********"
                            required
                            shadow
                            type="password"
                        />
                    </div>

                    <button type="submit" className='bg-primary text-white px-3 py-1.5 rounded-[5px] text-base font-semibold '>
                        Register new account </button>

                    <div className="flex items-center justify-end text-sm mt-0">
                        <p>Already have an account? <Link to={'/login'} className="text-black hover:text-primary underline">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

import { Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg';
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { createUser } from "@/redux/features/user/userSlice";
import { toast } from "react-toastify";



interface SignupFormInputs {
    email: string;
    password: string;
    rep_Password: string;
}

export default function SignUp() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormInputs>();


    const onSubmit = handleSubmit((data) => {
        console.log(data);
        if (data.password === data.rep_Password) {
            dispatch(createUser({ email: data.email, password: data.password }));
            toast.success("User Registerd Succesfully")
            navigate("/add-book")
        } else {
            toast.error("Both password must be same!")
            return
        }
    });


    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-0 ">
            <Link to={'/'}>  <img src={logo} alt="logo" srcSet="" className="w-32  mt-2" /></Link>

            <div className="flex flex-col items-center justify-center max-w-3xl mx-auto h-full p-5 bg-gray-200 m-5 my-10 rounded-[5px]">
                <h1 className="text-3xl font-bold ">Register</h1>
                <form onSubmit={onSubmit} className="flex  flex-col gap-4 w-full">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput
                            id="email2"
                            placeholder="name@abc.com"
                            {...register("email")}
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
                            {...register("password")}
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
                            {...register("rep_Password")}
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

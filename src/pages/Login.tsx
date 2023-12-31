import { Label, TextInput } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser } from '@/redux/features/user/userSlice';
import { toast } from "react-toastify";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
  } = useForm<LoginFormInputs>();

  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector(state => state.user);
  const navigate = useNavigate()

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
    toast.success("Logged in Succesfully")
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      console.log(user?.email)
      navigate("/add-book")
    }
  }, [user.email, isLoading])





  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0 ">
      <Link to={'/'}>  <img src={logo} alt="logo" srcSet="" className="w-32  mt-2" /></Link>


      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto h-full p-5 bg-gray-200 m-5 my-10 rounded-[5px]">
        <h1 className="text-3xl font-bold ">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col gap-4 w-full">
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

          <button type="submit" className='bg-primary text-white px-3 py-1.5 rounded-[5px] text-base font-semibold'>
            Login </button>

          <div className="flex items-center justify-end text-sm mt-0">
            <p>New at Book Shop? <Link to={'/signup'} className="text-black hover:text-primary underline">create an account</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

import Footer from "@/Layouts/Footer";
import RecentBooks from "@/components/RecentBooks";

export default function Home() {
    return (
        <div>
            <div className="">

                <Banner />
            </div>
            <RecentBooks />
            <Footer />
        </div>
    )
}



export function Banner() {
    return (
        <div className=" flex items-center justify-center min-h-screen max-w-7xl mx-auto bg-white">

            <div className="flex flex-col items-center h-full gap-5">
                <h1 className="text-3xl lg:text-5xl font-bold ">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                <p className="text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni tenetur quae dolorem alias, aliquid a perspiciatis esse mollitia dicta sequi. Saepe modi inventore ut! Quia ut aspernatur temporibus nostrum? Quo.</p>

                <a href="#" className="flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-primary text-white  rounded-md">Learn more </a>
                    
                   
               
            </div>

        </div>
    )
}


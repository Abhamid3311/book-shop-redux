import Footer from "@/Layouts/Footer";
import RecentBooks from "@/components/RecentBooks";
import { Link } from "react-router-dom";

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
                <h1 className="text-3xl lg:text-6xl font-bold ">Welcome To The Book Shop </h1>
                <p className="text-center ">Discover a captivating array of books in our catalog, ranging from thrilling adventures to insightful knowledge. Immerse yourself in a world of literary wonder and find the perfect read for every mood and interest. Your next great adventure awaits within the pages of our diverse collection.</p>

                <Link to="/all-books" className="flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-primary text-white  rounded-[5px]">Let's Explore </Link>
            </div>

        </div>
    )
}


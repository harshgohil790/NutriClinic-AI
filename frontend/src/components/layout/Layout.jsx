import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {

    return (
        <div className="relative min-h-screen bg-[#F8F8FC] overflow-hidden">

            {/* Background Logo */}

            <img
                src="/logo.png"
                alt="background"
                className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[850px]
        opacity-[0.08]
        blur-[1px]
        pointer-events-none
        select-none
    "
            />
             <div className="flex bg-gray-100">

            <Sidebar />

            <div className="flex-1 min-h-screen">

                <Navbar />

                <div className="p-8">

                    {children}

                </div>

            </div>

        </div>


         </div>   
        

    );

}

export default Layout;
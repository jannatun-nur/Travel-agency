import { GrUserWorker } from "react-icons/gr";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { GiCommercialAirplane } from "react-icons/gi";
import { TbWorldCheck } from "react-icons/tb";
import { MdHotel } from "react-icons/md";

const About = () => {
    return (
        <div>
        <p className="text-3xl font-bold text-center my-10 text-blue-900">Why choose GO-TRAVEL</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <section className="p-4 bg-gray-200 shadow-2xl shadow-blue-900">
            <p className= "text-7xl lg:ml-40 ml-24 md:ml-32 text-amber-700"><GrUserWorker /></p>
            <p className="text-2xl  text-center pt-4 text-gray-800 font-semibold">Best Tour Guide</p>
            <p className="text-center text-gray-800">Freiendly & qulified tour guide for each customers.</p>
            </section>

            <section className="p-4 bg-gray-200 shadow-2xl shadow-blue-900">
            <p className= "text-7xl lg:ml-40 ml-24 md:ml-32 text-lime-700"><FaCalendarCheck /></p>
            <p className="text-2xl  text-center pt-4 text-gray-800 font-semibold">Fast Booking</p>
            <p  className="text-center text-gray-800">Fastest flight booking & quick response.</p>
            </section>

            <section className="p-4 bg-gray-200 shadow-2xl shadow-blue-900">
            <p className= "text-7xl lg:ml-40 ml-24 md:ml-32 text-sky-700"><BiSolidOffer /></p>
            <p className="text-2xl  text-center pt-4 text-gray-800 font-semibold">Effortable Offer</p>
            <p  className="text-center text-gray-800">Monthly & seasonal offer for active customers.</p>
            </section>

            <section className="p-4 bg-gray-200 shadow-2xl shadow-blue-900">
            <p className= "text-7xl lg:ml-40 ml-24 md:ml-32 text-red-700"><GiCommercialAirplane /></p>
            <p className="text-2xl  text-center pt-4 text-gray-800 font-semibold">Best Sit Plan</p>
            <p  className="text-center text-gray-800">High quality sit at the time of travel.</p>
            </section>

            <section className="p-4 bg-gray-200 shadow-2xl shadow-blue-900">
            <p className= "text-7xl lg:ml-40 ml-24 md:ml-32 text-fuchsia-700"><TbWorldCheck /></p>
            <p className="text-2xl  text-center pt-4 text-gray-800 font-semibold">Communication</p>
            <p  className="text-center text-gray-800">Best world wide communication & services. </p>
            </section>

            <section className="p-4 bg-gray-200 shadow-2xl shadow-blue-900">
            <p className= "text-7xl lg:ml-40 ml-24 md:ml-32 text-pink-700"><MdHotel /></p>
            <p className="text-2xl  text-center pt-4 text-gray-800 font-semibold">VIP Hotel</p>
            <p  className="text-center text-gray-800">Effortable or costly hotel always avaiable for customers.</p>
            </section>
           </div> 
        </div>
    );
};

export default About;
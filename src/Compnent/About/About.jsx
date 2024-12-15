import { GrUserWorker } from "react-icons/gr";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { GiCommercialAirplane } from "react-icons/gi";

const About = () => {
    return (
        <div>
           <div>
            <section>
            <p><GrUserWorker /></p>
            <p>Best Tour Guide</p>
            </section>

            <section>
            <p><FaCalendarCheck /></p>
            <p>Fast Booking</p>
            </section>

            <section>
            <p><BiSolidOffer /></p>
            <p>Effortable Offer</p>
            </section>

            <section>
            <p><GiCommercialAirplane /></p>
            <p>Best Tour Guide</p>
            </section>

            <section>
            <p><GrUserWorker /></p>
            <p>Best Tour Guide</p>
            </section>

            <section>
            <p><GrUserWorker /></p>
            <p>Best Tour Guide</p>
            </section>
           </div> 
        </div>
    );
};

export default About;
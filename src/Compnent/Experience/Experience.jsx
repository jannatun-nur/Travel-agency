import { useEffect, useState } from "react";

import AliceCarousel from "react-alice-carousel";
import ExperienceCard from "./ExperienceCard";


const Experience = () => {

    const [experience , setExperience] = useState([])

    useEffect(()=>{
        fetch('experience.json')
        .then(res => res.json())
        .then (data => setExperience(data))
    },[])



    const handleDragStart = (e) => e.preventDefault();

    const item = experience.map((experiences) => (
        <div key={experiences.name} onDragStart={handleDragStart}>
            <ExperienceCard key={experiences} experiences = {experiences} />
        </div>
    ));

    return (
        <div>
            <h2 className="lg:text-4xl md:text-3xl text-2xl lg:mt-12 mt-10 py-4 font-semibold text-blue-950 ml-3">New Arrivals</h2>
            <AliceCarousel
                mouseTracking
                items={item}
                responsive={{
                    0: { items: 1 },
                    568: { items: 2 },
                    1024: { items: 3 },
                }}
                controlsStrategy="responsive"
                autoPlay
                autoPlayInterval={2000}
                infinite
                disableDotsControls
            />
        </div>
    );
};

export default Experience;
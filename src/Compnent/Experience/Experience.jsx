import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch('experience.json') // Ensure this path is correct
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data); // Debug fetched data
                setExperience(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleDragStart = (e) => e.preventDefault();

    const items = experience.map((experiences, index) => (
        <div key={index} onDragStart={handleDragStart}>
            <ExperienceCard experiences={experiences} />
        </div>
    ));

    return (
        <div className="bg-red-800">
            <h2 className="lg:text-4xl md:text-3xl text-2xl lg:mt-12 mt-10 py-4 font-semibold text-blue-950 ml-3">
                New Arrivals
            </h2>
            <AliceCarousel
                className="bg-green-500"
                mouseTracking
                items={items}
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

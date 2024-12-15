import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";


const Experience = () => {

    const [experience , setExperience] = useState([])

    useEffect(()=>{
        fetch('experience.json')
        .then(res => res.json())
        .then (data => setExperience(data))
    },[])
    return (
        <div>
            

            <div>
                {
                    experience.map(experiences => <ExperienceCard key={experiences} experiences={experiences}></ExperienceCard> )
                }
            </div>
        </div>
    );
};

export default Experience;
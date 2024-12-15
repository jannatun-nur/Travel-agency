import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";


const Packages = () => {

    const [packagee, setPackage] = useState([])

    useEffect( ()=>{
        fetch('package.json')
        .then( res => res.json())
        .then(data =>setPackage(data))
    },[])
    return (
        <div>
            <p className="text-3xl text-center text-blue-900 font-semibold mt-10">Book your favorite trip</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    packagee.map( packages => <PackageCard key={packages} packages={packages}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Packages;
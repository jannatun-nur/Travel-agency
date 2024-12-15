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
            

            <div>
                {
                    packagee.map( packages => <PackageCard key={packages} packages={packages}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Packages;
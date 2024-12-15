import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";


const Package = () => {

    const [package, setPackage] = useState([])

    useEffect( ()=>{
        fetch('package.json')
        .then( res => res.json())
        .then(data =>setPackage(data))
    },[])
    return (
        <div>
            

            <div>
                {
                    package.map( packages => <PackageCard key={packages} packages={packages}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Package;
import About from "../About/About";
import Banner from "../Banner/Banner";

import Footer from "../Footer/Footer";
import Packages from "../Package/Packages";






const LandingPage = () => {
    return (
        <div>
      
           <Banner/>
           
         
          <div className="mx-2">
          <Packages/>
          <About/>
          </div>
          <Footer/>
        </div>
    );
};

export default LandingPage;
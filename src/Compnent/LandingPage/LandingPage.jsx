import About from "../About/About";
import Banner from "../Banner/Banner";

import Footer from "../Footer/Footer";
import Packages from "../Package/Packages";






const LandingPage = () => {
    return (
        <div>
      
           <Banner/>
           <Packages/>
         
          <div className="mx-2">
          <About/>
          </div>
          <Footer/>
        </div>
    );
};

export default LandingPage;
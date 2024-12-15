import About from "../About/About";
import Banner from "../Banner/Banner";






const LandingPage = () => {
    return (
        <div>
      
           <Banner/>
         
          <div className="mx-2">
          <About/>
          </div>
          
        </div>
    );
};

export default LandingPage;
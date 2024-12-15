import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";






const LandingPage = () => {
    return (
        <div>
      
           <Banner/>
         
          <div className="mx-2">
          <About/>
          </div>
          <Footer/>
        </div>
    );
};

export default LandingPage;
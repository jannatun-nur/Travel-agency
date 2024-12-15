
import Navbar from '../Navbar';
import './banner.css'


const Banner = () => {
    return (
       
           <div className="landing-page ">
           <Navbar/>
        <div className="flex z-10">
          <div className="image-container left">
           
          </div>

          <div className="image-container right">
            <p className="headline text-xl md:text-3xl lg:text-6xl font-serif text-white font-bold py-8">
            WHAT'S YOUR PLAN FOR THIS HOLIDAY  !!?
            </p>
            <p className="subheadline text-lg md:text-2xl lg:text-2xl font-serif text-white  py-1 lg:py-8">
            Why shouldn't plan for a trip ?? Let's go for...
            </p>
            
              <button className="discover-btn
               bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 px-5 py-2 rounded-2xl
                text-white font-serif text-lg md:text-xl ">
                BOOK A TRIP NOW 
              </button>
           
          </div>
        </div>
      </div>  
        
    );
};

export default Banner;

import Aos from 'aos';
import logo from '../../../public/images/logo.png'
import { useEffect } from 'react';
const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 }); 
    }, []);

    return (
        <div 
          data-aos="fade-right"
        className="mt-10">
            <footer 
           
            
            className="footer bg-base-200  p-10 text-white">
  <aside>
        <img src={logo} alt="logo"/>
    <p>
      GoTRAVEL
      <br />
      Providing services since 2003
    </p>
  </aside>

  <nav>
    <h6 className="footer-title">Know more</h6>
    <a className="link link-hover">+6854216</a>
    <a className="link link-hover">www.gotravel.world.com</a>
    <a className="link link-hover">GoTravel</a>
    <a className="link link-hover">https//:gotravel.com</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">Shares</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
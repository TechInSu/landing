import { Link } from "react-router-dom";
import PlaneSvg from "../assets/plane.svg";
import InstagramSvg from "../assets/instagram.svg";
import FaceBookSvg from "../assets/facebook.svg";
import LinkedinSvg from "../assets/linkedin.svg";
import YoutubeSvg from "../assets/youtube.svg";
import Logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="md:flex justify-between max-w-[1440px] lg:px-16 px-5 mx-auto">
        <div className="flex space-x-[112px]">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-8">Company</h3>
            <Link className="font-light" to="/">
              About us
            </Link>
            <Link className="font-light" to="/">
              Blog
            </Link>
            <Link className="font-light" to="/">
              Contact us
            </Link>
            <Link className="font-light" to="/">
              Pricing
            </Link>
            <Link className="font-light" to="/">
              Testimonials
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-8">Support</h3>
            <Link className="font-light" to="/">
              Help center
            </Link>
            <Link className="font-light" to="/">
              Terms of service
            </Link>
            <Link className="font-light" to="/">
              Legal
            </Link>
            <Link className="font-light" to="/">
              Privacy policy
            </Link>
            <Link className="font-light" to="/">
              Status
            </Link>
          </div>
        </div>
        <div className="md:mt-0 mt-6">
          <h3 className="text-xl font-semibold mb-8">Stay up to date</h3>

          <div className="flex justify-between border border-gray-200 rounded-md p-2">
            <input type="text" placeholder="Your email address" />
            <img src={PlaneSvg} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] lg:px-16 px-5 mx-auto mt-14 flex md:flex-row flex-col md:space-y-0 space-y-6 justify-between items-center">
        <div>
          <div className="flex space-x-4">
            <a href="https://instagram.com">
              <img src={InstagramSvg} alt="" />
            </a>
            <a href="https://facebook.com">
              <img src={FaceBookSvg} alt="" />
            </a>
            <a href="https://linkedin.com">
              <img src={LinkedinSvg} alt="" />
            </a>
            <a href="https://youtube.com">
              <img src={YoutubeSvg} alt="" />
            </a>
          </div>
        </div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <p className="md:text-right text-center font-light">
          Copyright © 2023 Knowledger
          <br />
          All rights reserverd
        </p>
      </div>
    </footer>
  );
};

export default Footer;

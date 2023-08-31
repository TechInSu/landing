import Navbar from "../components/Navbar";
import HeroSvg from "../assets/hero.png";

import TextSvg from "../assets/text.svg";
import ValueSvg from "../assets/value.svg";
import JacketSvg from "../assets/jacket.svg";
import DigitalPassSvg from "../assets/digital-pass.svg";
import Figure1 from "../assets/figure1.svg";
import Figure2 from "../assets/figure2.svg";
import Figure3 from "../assets/figure3.svg";
import Figure4 from "../assets/figure4.svg";

import GiveawaySvg from "../assets/giveaway.svg";
import RoadMapSvg from "../assets/roadmap.png";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="relative min-h-[100vh] overflow-x-hidden font-galano bg-[#F4F4F4]">
      <Navbar />
      <div className="flex justify-center mt-24 relative w-full h-max">
        <img className=" w-full" src={HeroSvg} alt="" />
        <h1 className="w-full font-semibold lg:text-8xl md:text-7xl text-4xl absolute text-center top-1/4 z-10">
          Web3 Augmented <br /> Cognition Platform
        </h1>
      </div>
      <section className="max-w-[1440px] mx-auto lg:px-16 px-5 relative -top-14">
        <h2 className="md:text-5xl text-3xl text-center mb-8">Learn Course</h2>
        <p className="max-w-5xl text-center leading-normal rounded-2xl mx-auto md:p-16 p-8 bg-white text-xl">
          At Knowledger, we understand that the journey of learning is unique
          for each individual. Life's uncertainties may have created educational
          gaps, leaving you searching for a solid foundation to build upon. We
          are here to empower you to overcome these challenges, embrace
          continuous learning, and bridge those gaps with confidence.
        </p>
      </section>
      <section className="flex flex-col items-center mx-auto lg:px-16 px-5 mt-32">
        <img className="max-w-[348px] w-full" src={TextSvg} alt="" />
      </section>

      <section className="max-w-[1440px] mx-auto lg:px-16 px-5 mt-32">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12">
          <div className="md:max-w-[50%]">
            <h2 className="md:text-[64px] md:text-5xl text-3xl font-semibold leading-normal mb-6">
              We understand the value of{" "}
              <span className="text-[#7E45F6]">your time and effort</span>
            </h2>
            <p className="border-l-4 border-[#7E45F6] pl-6 md:text-xl">
              Which is why we have integrated the innovative "Learn-to-Earn"
              concept.
              <br />
              <br />
              With Knowledger, your dedication to learning is rewarded. As you
              progress through courses and demonstrate your mastery, you'll earn
              rewards, certificates, and even real-world incentives that
              recognize your achievements
            </p>
          </div>
          <div className="md:max-w-[50%] md:mt-0 mt-6">
            <img
              className="md:max-w-full w-4/5 md:mx-0 mx-auto"
              src={ValueSvg}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto lg:px-16 px-5 mt-32">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:max-w-[50%] md:mt-0 mt-6">
            <img className="md:max-w-full max-w-sm" src={JacketSvg} alt="" />
          </div>
          <div className="md:max-w-[50%]">
            <img
              className="md:ml-auto md:mr-0 mx-auto md:mb-0 mb-5"
              src={DigitalPassSvg}
              alt=""
            />
            <p className="md:text-xl md:text-right">
              At the heart of our platform is Digital Pass. Each Digital Pass
              grants you access to a particular subject. As you progress and
              gain expertise, you'll have the ability to upgrade your Digital
              Pass, unlocking access to more advanced courses and gaining
              recognition for your accomplishments.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto lg:px-16 px-5 mt-32">
        <h2 className="text-5xl text-center mb-2">WIZ</h2>
        <p className="text-center md:text-2xl font-medium mb-11">
          Dive into the captivating world of WIZ, where knowledge meets
          excitement. Test your expertise in four fascinating categories: AI,
          blockchain, games, and math. By answering questions correctly, you'll
          be able to compete with others in a weekly lottery
        </p>
        <div className="flex justify-between flex-wrap">
          <div className="md:m-0 shadow-lg m-6 flex items-center max-w-[max-content] space-x-16 rounded-lg p-4 bg-white">
            <img src={Figure1} alt="" />
            <span className="font-semibold text-3xl">AI</span>
          </div>
          <div className="md:m-0 shadow-lg m-6 flex items-center max-w-[max-content] space-x-16 rounded-lg p-4 bg-white">
            <img src={Figure2} alt="" />
            <span className="font-semibold text-3xl">Blockchain</span>
          </div>
          <div className="md:m-0 shadow-lg m-6 flex items-center max-w-[max-content] space-x-16 rounded-lg p-4 bg-white">
            <img src={Figure3} alt="" />
            <span className="font-semibold text-3xl">Math</span>
          </div>
          <div className="md:m-0 shadow-lg m-6 flex items-center max-w-[max-content] space-x-16 rounded-lg p-4 bg-white">
            <img src={Figure4} alt="" />
            <span className="font-semibold text-3xl">Games</span>
          </div>
        </div>
        <div>
          <Link to="https://knowledger.org/wiz">
            <img className="ml-auto my-10" src={GiveawaySvg} alt="" />
          </Link>
        </div>
      </section>
      <section className="rounded-3xl bg-black">
        <h2 className="text-white text-center md:text-5xl text-2xl py-16">
          Roadmap
        </h2>
        <img className="max-w-6xl w-full mx-auto p-8" src={RoadMapSvg} alt="" />
      </section>
      <Footer />
    </div>
  );
};

export default Root;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErIconSvg from "../assets/er-icon.svg";
import ErPng from "../assets/er.png";
import LaptopPng from "../assets/laptop.png";
import TickSvg from "../assets/tick.svg";
import AuctionPng from "../assets/auction.png";
import PinSvg from "../assets/pin.svg";

const EarnPoints = () => {
  return (
    <div className="relative min-h-[100vh] overflow-x-hidden font-galano bg-[#F4F4F4]">
      <Navbar />
      <h1 className="text-center my-24 text-5xl font-semibold">Earn points</h1>
      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex items-center md:flex-row flex-col md:space-y-0 space-y-6">
        <div className="md:w-1/2">
          <div className="flex mb-8 items-center">
            <img src={ErIconSvg} alt="" />
            <div className="ml-4">
              <h3 className="md:text-5xl text-3xl"> ER points</h3>
            </div>
          </div>
          <p className="md:text-xl">
            Earn ER points by completing unit exams and participating in WIZ.ER
            Points, our internal currency, that let you
          </p>
        </div>

        <div className="md:w-1/2">
          <img className="w-full" src={ErPng} alt="" />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex flex-col items-center">
        <h2 className="md:text-5xl text-4xl font-semibold mb-14">
          Buy STEM goods
        </h2>
        <p className="max-w-6xl text-center md:text-xl mb-14">
          Buy Products with ER Points Our Vendors provide products which you can
          buy with your knowledge! We provide unique opportunity to buy physical
          items from the official stores.
        </p>
        <img className="max-w-6xl w-full" src={LaptopPng} alt="" />
      </section>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32">
        <div>
          <div className="flex justify-center space-x-6 mb-10">
            <img src={TickSvg} alt="" />
            <div>
              <h2 className="text-3xl font-semibold">
                Get parental (friends) support
              </h2>
              <p>Parental Support Program</p>
            </div>
          </div>
          <p className="md:text-xl text-center">
            Stimulate your child with our parental support program. Enroll in
            our Parental Support Program to boost your child's growth. Through
            this initiative, children can use internal currency for purchases,
            while parents cover the remaining cost. It encourages financial
            responsibility and shared investment in their development.
          </p>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col-reverse md:space-y-0 space-y-6 pb-60">
        <div className="md:w-1/2 md:mt-0 mt-10">
          <img className="w-full" src={AuctionPng} alt="" />
        </div>
        <div className="md:w-1/2 ">
          <div className="flex items-center md:justify-end justify-center mb-8">
            <div className="mr-4">
              <h3 className="md:text-5xl text-4xl">Auction </h3>
            </div>
            <img src={PinSvg} alt="" />
          </div>
          <p className="text-xl md:text-right">
            Bid with the earned Knowledge Participate in the Auction to convert
            your knowledge into exciting rewards. Bid on various items using
            earned EDRs points, compete with other students, and turn your
            knowledge into valuable goods, creating a unique motivation for
            learning.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EarnPoints;

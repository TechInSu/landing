import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JacketSvg from "../assets/jacket.svg";
import DiplomaPng from "../assets/diploma.png";

import DiplomaIconSvg from "../assets/diploma-icon.svg";

const DigitalPass = () => {
  return (
    <div className="relative min-h-[100vh] overflow-x-hidden font-galano bg-[#F4F4F4]">
      <Navbar />
      <h1 className="text-center mt-24 md:text-5xl text-4xl font-semibold">
        PLAY DP
      </h1>
      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 flex items-center md:flex-row flex-col md:space-y-0 space-y-6">
        <div className="md:w-1/2 md:mt-0 mt-16">
          <h2>
            <span className="block lg:text-7xl md:text-5xl text-4xl font-semibold">
              Digital Pass
            </span>
            <br />
            <span className="lg:text-5xl md:text-4xl text-3xl text-[#7E45F6] leading-normal">
              Introducing the Digital Pass, on our platform!
            </span>
          </h2>
        </div>

        <div className="md:w-1/2 z-20">
          <img
            className="md:w-full w-3/4 md:mx-0 mx-auto"
            src={JacketSvg}
            alt=""
          />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 flex items-center">
        <p className="bg-[#6A4FF5] text-xl font-medium text-white mx-auto p-6 rounded-2xl relative -top-10 z-0">
          With just one payment, you get instant access to not only our courses,
          but to our community!
        </p>
      </section>

      <section className="mt-20 max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 ">
        <h2 className="text-center md:text-4xl  text-3xl mb-10">
          Upgrade levels and foster features
        </h2>
        <div></div>

        <div className="md:flex justify-between md:space-x-5 md:space-y-0 space-y-8">
          <div className="bg-[#EBEAF2] p-10 rounded-xl ">
            <p className="md:text-xl">
              <b>Attributes</b> <br /> <br />
              <b>Subject.</b> Subject specific, which means that owning
              "Chemistry" DP will only give me access to learn Chemistry
              courses.
              <br />
              <br />
              <b>Level. </b>
              DP will have level gradation based on the subject. Students will
              be able to upgrade this attribute by spending their earned EdRes
              <br />
              <br />
              <b>Points. </b>
              Upgrading the level means that the student will now have access to
              courses of the next level(in addition to courses of previous
              levels)
              <br />
              <br />
              <b>GPA. </b>
              DP will have level gradation based on the subject. DP is
              essentially our students' diploma which contains all the grades
              for the topics inside courses that were completed.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col-reverse md:space-y-0 space-y-6 pb-60">
        <div className="md:w-1/2">
          <img className="w-full" src={DiplomaPng} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center md:justify-end justify-center mb-8">
            <div className="md:mr-4">
              <h3 className="md:text-5xl text-3xl">Convert to Diploma</h3>
            </div>
            <img src={DiplomaIconSvg} alt="" />
          </div>
          <p className="md:text-xl md:text-right md:mb-0 mb-10">
            In Knowledger we believe that Digital Diploma will be an essential
            part of a future education experience.
            <br />
            <br />
            The Digital Pass is a diploma which doesn't need to have a physical
            presence as it stores the student's GPA, performance, number of
            courses taken as well as period of study completely online.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DigitalPass;

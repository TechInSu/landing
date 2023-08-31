import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Figure1Svg from "../assets/figure1.svg";
// import Figure2Svg from '../assets/figure2.svg'
// import Figure3Svg from '../assets/figure3.svg'
// import Figure4Svg from '../assets/figure4.svg'
import LearnAiPng from "../assets/learnai.png";
import EducationPng from "../assets/education.png";
import PapersSvg from "../assets/papers.svg";
import RectangleSvg from "../assets/rectangle.svg";
import TransformPng from "../assets/transform.png";

const Learn = () => {
  return (
    <div className="relative min-h-[100vh] overflow-x-hidden font-galano bg-[#F4F4F4]">
      <Navbar />
      <h1 className="text-center md:text-6xl text-4xl font-semibold mt-20">
        Learn course
      </h1>
      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col items-center md:space-y-0 space-y-6">
        <div className="md:w-1/2">
          <div className="flex mb-8">
            <img src={Figure1Svg} alt="" />
            <div className="ml-4">
              <h3 className="md:text-5xl text-3xl"> Learn with AI</h3>
              <p>(at higher levels of cognition)</p>
            </div>
          </div>
          <p className="md:text-xl">
            KLAIRE is not just your average AI assistant; it's a revolutionary
            tool designed to take your learning experience to the next level.
            Inspired by Benjamin Bloom's Taxonomy of Educational Objectives, our
            AI assistant is purpose-built to help students comprehend and engage
            with teachers' material at the highest levels of cognitive thinking.
          </p>
        </div>

        <div className="md:w-1/2">
          <img className="w-full" src={LearnAiPng} alt="" />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col-reverse items-center md:space-y-0 space-y-6 ">
        <div className="md:w-1/2">
          <img className="w-full" src={EducationPng} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="flex mb-8">
            <img src={PapersSvg} alt="" />
            <div className="ml-4">
              <h3 className="md:text-5xl text-3xl"> Continuous education</h3>
              <p>(access to all the courses of one subject)</p>
            </div>
          </div>
          <p className="md:text-xl md:mb-0 mb-10">
            Our platform has redefined the way you gain expertise in your chosen
            subject. Say hello to Continuous Learning, a dynamic method that
            empowers you to master subjects at your own pace and depth.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col md:space-y-0 space-y-6">
        <div className="md:w-1/2">
          <div className="flex mb-8 items-center">
            <img src={RectangleSvg} alt="" />
            <div className="ml-4">
              <h3 className="md:text-5xl text-3xl">
                {" "}
                Transform learning experience{" "}
              </h3>
              <p>(by making your own choice of courses and ai prompts)</p>
            </div>
          </div>
          <p className="text-xl">
            With Knowledger, you are not just a passive learner; you are an
            active participant in your educational journey. Transform your
            learning experience by engaging in various courses and using
            provided prompts to essentially "create" your own version of those
            courses.
          </p>
        </div>

        <div className="md:w-1/2">
          <img className="w-full" src={TransformPng} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Learn;

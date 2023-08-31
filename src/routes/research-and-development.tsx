import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RndPng from "../assets/rnd.png";
import CloudPng from "../assets/cloud.png";
import RoadMapSvg from "../assets/roadmap.svg";
const RnD = () => {
  return (
    <div className="relative min-h-[100vh] overflow-x-hidden font-galano bg-[#F4F4F4]">
      <Navbar />
      <h1 className="text-center mt-24 text-5xl font-semibold mb-16">R&D</h1>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col md:space-y-0 space-y-6 md:pb-40">
        <div className="md:w-1/2">
          <div className="flex mb-8">
            <div>
              <h3 className="md:text-4xl text-3xl">Science research </h3>
            </div>
          </div>
          <p className="md:text-xl">
            At the heart of Knowledger is a network of subject-specific Science
            DAOs, each comprising numerous members with varying positions and
            levels of expertise.
            <br /> <br />
            These Science DAOs serve as decentralized decision-making bodies,
            responsible for evaluating and funding research proposals based on a
            voting mechanism that leverages the collective intelligence of the
            community.
          </p>
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src={RndPng} alt="" />
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col-reverse md:space-y-0 space-y-6 pb-60">
        <div className="md:w-1/2">
          <img className="w-full" src={CloudPng} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="flex md:justify-end mb-8">
            <div>
              <h3 className="md:text-4xl text-3xl">Technology development </h3>
            </div>
          </div>
          <p className="md:text-xl md:text-right md:mb-0 mb-10">
            At Knowledger, collaboration is at the heart of our mission. By
            working together across disciplines, we foster an environment where
            creativity flourishes, and breakthroughs are celebrated. Our
            platform encourages cross-pollination of ideas, bridging the gap
            between education and research, and pushing the boundaries of
            knowledge.
          </p>
        </div>
      </section>
      <section className="rounded-3xl bg-black p-10">
        <h2 className="text-white text-center md:text-5xl text-2xl py-16">
          Roadmap
        </h2>
        <img className="max-w-6xl w-full mx-auto" src={RoadMapSvg} alt="" />
      </section>
      <Footer />
    </div>
  );
};

export default RnD;

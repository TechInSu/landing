import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShareKnowledgeSvg from "../assets/share-knowledge.svg";
import TokensSvg from "../assets/coins.png";
const ShareKnowledge = () => {
  return (
    <div className="relative min-h-[100vh] overflow-x-hidden font-galano bg-[#F4F4F4]">
      <Navbar />
      <h1 className="text-center mt-24 md:text-5xl text-4xl mb-12 font-semibold">
        Share Knowledge
      </h1>
      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 flex items-center md:flex-row flex-col-reverse md:space-y-0 space-y-6">
        <div className="md:w-2/5">
          <img
            className="md:w-full w-3/4 md:mx-0 mx-auto"
            src={ShareKnowledgeSvg}
            alt=""
          />
        </div>

        <div className="md:w-3/5">
          <h2 className="md:text-4xl text-3xl mb-6">Peers and institutions</h2>
          <p className="md:text-xl">
            We are building community around knowledge. Expand your network,
            join scientific communities and share with your expertise with our
            Weber social network.
          </p>
        </div>
      </section>
      <section className="flex items-center flex-col my-36 px-5">
        <h2 className="md:text-5xl text-3xl mb-8">Resources</h2>
        <p className="md:text-xl max-w-xl text-center">
          If you want to learn more about the platform you can read the
          instructions for use below.
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto md:space-x-10 space-x-0 lg:px-16 px-5 mt-32 flex md:flex-row flex-col md:space-y-0 space-y-6 pb-60">
        <div className="md:w-1/2">
          <div className="flexmb-8">
            <div className="mr-4">
              <h3 className="md:text-5xl text-3xl mb-5">OWL Tokens</h3>
            </div>
          </div>
          <p className="md:text-xl">
            Discover OWL - our governance token that empowers you in a whole new
            way. Built on blockchain technology, it's your key to actively shape
            the direction of our protocol.
            <br /> <br />
            As an OWL holder, you're part of the decision-making process.
            Propose innovative features, influence the governance system, and
            cast your vote based on your voting power. OWL puts the control in
            your hands.
            <br /> <br />
            Join us in shaping the future together.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            className="md:w-full w-3/4 md:mx-0 mx-auto"
            src={TokensSvg}
            alt=""
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShareKnowledge;

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="max-w-6xl mt-0 md:mt-14 grid grid-cols-1 lg:grid-cols-2 px-9 mx-auto">
      <div className="col-span-1  flex flex-col justify-center lg:items-start items-center me-4 mt-9 ">
        <div className="">
          <h1 className=" text-[36px] md:text-[55px] text-center lg:text-start text-[#2d2e32] font-bold">
            Full Stack (MERN) Developer
            <LazyLoadImage
              alt="image"
              src="/hand.png" // use normal <img> attributes as props
              className=" ms-3 inline md:w-[60px] w-[40px] h-[40px] md:h-[60px]"
            />
          </h1>
        </div>

        <p className="text-[18px] text-center md:text-start mt-">
          Hi, I'm Tuhin Kapri. I am developing Creative and Interactive web apps
        </p>
        <div className="flex gap-4 mt-3">
          <Link to="https://github.com/TUHINKAPRI">
            <img src="github.png" alt="github" className="w-6 h-6" />
          </Link>
          <Link to="https://www.linkedin.com/in/tuhin-kapri-a94300224">
            <img src="linkedin.png" alt="linkedin" className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="8401.jpg"
          alt=""
          className="w-[521px] h-[250px]  mt-6 lg:mt-0 sm:h-[333px]"
        />
      </div>
    </div>
  );
}

export default Hero;

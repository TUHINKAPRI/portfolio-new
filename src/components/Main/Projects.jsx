import { projects } from "@/constants/data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects" className="mt-24">
      <h1 className="font-semibold text-[20px] text-blue-600 mb-3">
        Projects :{" "}
      </h1>
      <p className="text-[18px] font-semibold text-gray-700">
        Each project is unique piece of Development
      </p>
      <div className="mt-10 flex max-w-3xl   mx-auto flex-col gap-20">
        {projects?.map((ele, index) => (
          <div
            key={index}
            className={`flex sm:mx-auto md:mx-0 flex-col-reverse sm:w-[330px] md:w-full  ${
              index%2===0 ? "md:flex-row-reverse" : "md:flex-row"
            } p-3  gap-10 rounded-lg  `}
          >
            <img
              src={ele?.image}
              alt="Image"
              className=" transition transform  duration-300 hover:scale-105 rounded-lg object-fill w-[350px] h-[200px] "
            />

            <div className="flex gap-2 flex-col justify-between">
              <h1 className="text-[17px] capitalize my-1 font-bold text-blue-600 ">
                {ele?.title}
                <span className="inline mx-3">
                  <img src={ele?.icon} alt="" className="inline w-5 h-5" />
                </span>
              </h1>
              <p className="text-gray-600 text-[13px]  mb-2">
                {ele?.description}
              </p>
              <div className="flex gap-x-3 mb-2 flex-wrap">
                {ele?.tech?.map((item, index) => (
                  <p key={index} className="text-[12px] font-semibold   ">
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-8">
                <Link
                  to={`${ele?.githubLink}`}
                  className="flex items-center gap-1"
                >
                  <span className="text-[13px] font-semibold">Code</span>
                  <img
                    src="github.png"
                    alt="Image"
                    className=" rounded-full w-5 h-5 "
                  />
                </Link>
                <Link
                  to={`${ele?.liveLink}`}
                  className="flex items-center gap-1"
                >
                  <span className="text-[13px] font-semibold"> Live demo</span>
                  <IoIosArrowRoundForward size={30} className="text-blue-500" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

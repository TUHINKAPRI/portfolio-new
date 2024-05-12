import { Link } from "react-router-dom";

function Footer() {
  return (
    <div  className="shadow-md border-t-2 mt-16  ">
      <div className="bg-white  py-6 flex max-w-6xl mx-auto items-center  px-8 justify-between">
      <h1 className="text-gray-800  text-xl font-semibold">
        Tuhin kumar Kapri
      </h1>
      <div>
        <div className="flex items-center  gap-6">
          <Link to="https://www.linkedin.com/in/tuhin-kapri-a94300224">
            <img src="/linkedin.png" alt="Linkedin" className="w-[40px]" />
          </Link>
          <Link to="https://github.com/TUHINKAPRI">
          
            <img src="/github.png" alt="Linkedin" className="w-[40px]" />
          </Link>
          <Link to="/">
            <img src="/facebook.png" alt="Linkedin" className="w-[40px]" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;

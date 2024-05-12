function AboutMe() {
  return (
    <div id="about" className="grid   gap-5 mt-16 sm:mt-32 grid-cols-1 sm:grid-cols-2">
    <div className="col-span-1 flex justify-center">
        <img
          src="aboutimage.jpg"
          alt="rbgreherh"
          className="md:w-[500px]  w-[300px] rounded-lg md:h-[312px]"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-[18px] font-semibold text-blue-500 ">ABOUT ME</h1>
        <h1 className="text-2xl my-4 font-semibold text-gray-800">
          Full Stack Developer and Programmer
        </h1>
        <p className=" text-gray-700">
          As a full stack developer, my expertise lies in creating seamless and
          intuitive user experiences and web services.
        </p>
        <p className="mt-3 text-gray-700 ">
          I specialize in using cutting-edge technologies to produce
          high-quality web applications. Specifically, I have vast knowledge of
          ReactJS and NodeJS, which allow me to build complex and dynamic
          applications with ease.
        </p>
      </div>
      
    </div>
  );
}

export default AboutMe;

function Contact() {
  const onButtonClick = () => {
    return (
      <iframe src="Tuhin Kapri Resume_.pdf" width="600" height="400"></iframe>
    );
  };
  return (
    <div className="mt-20 " id="contact">
      <h1 className="text-blue-600 text-[18px] font-semibold">Contact : </h1>
      <p className="my-4 font-semibold text-[18px]">
        Don't be shy! Hit me up!
        <span className="mx-3">
          <img src="victory.png" alt="" className="w-7 inline h-7" />
        </span>
      </p>
      <div className="flex flex-wrap gap-x-[150px] gap-y-10 ms-12 items-center">
        <div className="flex gap-2 items-center">
          <img src="location.png" alt="" className="w-10 h-10 inline " />

          <div>
            <p className="font-semibold ">Location</p>
            <p className="font-semibold">West Bengal , India</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img src="mail.png" alt="" className="w-10 h-10 inline " />
          <div>
            <p className="font-semibold ">Mail</p>
            <p className="font-semibold mb-2">tuhinkapri2@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src="cv.png" alt="" className="w-10 h-10 inline " />
          <div>
            <button
              onClick={onButtonClick}
              className="bg-blue-500 rounded-md hover:opacity-70  ease-in-out transition delay-100  text-white px-5 py-2 "
            >
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

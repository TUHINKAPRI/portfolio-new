import React from "react";

function Technology() {
  return (
    <div className="mt-20 flex flex-col gap-6   ">
      <div>
        <h1 className="text-[20px] font-semibold">
          Tech Stack <span className="mx-3"> : </span>{" "}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <img src="html.png" alt="" className="w-12 h-12 " />
        <img src="css-3.png" alt=""  className="w-12 h-12 " />
        <img src="java.png" alt="" className="w-12 h-12 "  />
        <img src="js.png" alt=""  className="w-12 h-12 " />
        <img src="typescript.png" alt=""  className="w-12 h-12 " />
        <img src="physics.png" alt=""  className="w-12 h-12 " />
        <img src="next-js.svg" alt=""  className="w-12 h-12 " />
        <img src="redux.svg" alt="" className="w-12 h-12 " />
        <img src="bootstrap.png" alt=""  className="w-12 h-12 " />
        <img src="tailwind-css.svg" alt="" className="w-12 h-12 "  />
        <img src="nodejs.svg" alt=""  className="w-12 h-12 " />
        <img src="mongo.png" alt="" className="w-12 h-12 " />
        <img src="sql.png" alt="" className="w-12 h-12 " />
        <img src="git.svg" alt="" className="w-12 h-12 " />
      </div>
    </div>
  );
}

export default Technology;

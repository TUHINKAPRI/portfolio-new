import { menuLink } from "../../constants/data";
import { FiMenu } from "react-icons/fi";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-b-2 ">
      <div className=" max-w-6xl px-9 mx-auto items-center flex justify-between py-5">
        <div>
          <h2 className="text-xl font-bold cursor-pointer hover:text-blue-600 text-[#2d2e32]">
            TKapri.dev
          </h2>
        </div>
        <div className="md:hidden block">
          <Sheet
            hideClose={false}
            open={isOpen}
            onOpenChange={(data) => {
              setIsOpen(data);
            }}
          >
            <SheetTrigger
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <FiMenu size={24} className="hover:text-blue-600" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-semibold text-[25px]">
                  Menu
                </SheetTitle>
                <SheetDescription>
                  {menuLink?.map((ele, index) => {
                    return (
                      <div
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        key={index}
                        className="hover:text-blue-600  text-[18px] mb-3 font-semibold cursor-pointer  "
                      >
                        {ele}
                      </div>
                    );
                  })}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className=" hidden md:flex  font-semibold gap-6">
          {menuLink?.map((ele, index) => {
            return (
              <Link
                to={`${ele?.link}`}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                key={index}
                className="hover:text-blue-600 cursor-pointer  "
              >
                {ele?.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

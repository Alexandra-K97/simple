"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {}

const array = ["Продукция", "Материалы", "О нас", "Контакты"];

const Header: React.FC<Props> = ({}) => {
const [openBurger, setOpenBurger] = useState(false);
useEffect(() =>{
if(openBurger===true){
document.body.style.overflow = "hidden"
}
else{
  document.body.style.overflow = "auto"
}
},[openBurger])
  return (
    <>
    <div className={twMerge("fixed top-[49px] right-[-100vw] h-screen w-screen bg-[#F5F5F5] duration-300" , openBurger===true &&"right-0")}>
      <div className="container">
      <div className="flex flex-col pt-[67px] gap-[45px]">
          {array.map((item, i) => (
            <a  key={i} href="#!">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
      <header className="border-b-2   border-[#DDDDDD]  py-7 max-lg:pt-[11px] max-lg:pb-5 max-md:pb-0">
        <div className="container">
          <div className="flex justify-between items-center  max-lg:pb-[5px]  max-md:justify-center  max-md:pb-[15px] ">
            <Image src="icons/logo.svg" alt="logo" width={142} height={22} />
            <div className=" flex gap-[60px]">
              {array.map((item, i) => (
                <a className="max-lg:hidden" key={i} href="#!">
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-[30px]  max-md:hidden">
                <button>
                  <Image
                    src="icons/search.svg"
                    alt="Поиск"
                    width={24}
                    height={24}
                  />
                </button>
                <button>
                  <Image
                    src="icons/exit.svg"
                    alt="Выход"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" container border-t-2   border-[#DDDDDD] lg:hidden">
          <div className="flex md:hidden max-md: justify-between max-md:py-[15px] max-md:items-center">
            <button  onClick={()=>setOpenBurger(!openBurger)} className={twMerge("burgerButton", openBurger && "active")}>
              <span className="top" />
              <span className="middle" />
              <span className="bottom" />
            </button>
            <div className="max-md:flex max-md:gap-[30px]">
              <button>
                <Image
                  src="icons/search.svg"
                  alt="Поиск"
                  width={24}
                  height={24}
                />
              </button>
              <button>
                <Image
                  src="icons/exit.svg"
                  alt="Выход"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="container lg:hidden  max-md:hidden max-lg:pt-[20px]  max-lg:flex max-lg:justify-between">
          {array.map((item, i) => (
            <a key={i} href="#!">
              {item}
            </a>
          ))}
        </div>
      </header>
    </>
  );
};
export default Header;

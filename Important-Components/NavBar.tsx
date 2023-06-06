/* className="S_Underline relative inline-block p-3 t text-slate-100 underline-offset-4 transition-all duration-300 group-hover:-translate-y-4 group-hover:after:left-0 group-hover:after:w-full" */
// .S_Underline {
// 	@apply after:absolute after:bottom-2 after:left-[2px] after:h-0.5 after:w-0 after:transition-all after:duration-[400ms] after:content-[''];
//   }

"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logoipsum.svg";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import { FiMenu, RxCross1, CartLogo } from "@/lib/icons";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "home", link: "/", id: "1" },
  { title: "all products", link: "/products", id: "2" },
  { title: "men", link: "/products/men", id: "3" },
  { title: "women", link: "/products/women", id: "4" },
];

export default function Navbar() {
  const { state, dispatch } = useContext(GlobalContext);
  // const [totalProductQuantity, setTotalProductQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {
  //   let totalQuantity = 0;
  //   state.cart.map((item) => {
  //     totalQuantity += item.quantity;
  //   });
  //   // console.log(
  //   //   "🚀 ~ file: index.tsx:19 ~ getTotalQuantity ~ totalQuantity:",
  //   //   totalQuantity
  //   // );
  //   setTotalProductQuantity(totalQuantity);
  // }, [state]);
  // console.log("🚀 ~ file: index.tsx:27 ~ Navbar ~ state:", state.cart);

  return (
    <nav className="sticky  top-0 z-50 w-full bg-white shadow-xl drop-shadow-md">
      <div className="mx-auto max-w-5xl">
        <div
          className={`desktop-nav-bar fixed left-0 top-0 z-40 ${
            !open && "hidden"
          } h-full w-full`}
        >
          <div className="absolute right-5 top-6">
            <RxCross1
              className="text-primary"
              size={25}
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="m-auto mx-4 mt-16 flex flex-col bg-[#ffffffc9] text-base font-normal text-secondary backdrop-blur-lg">
            {navLinks.map((item) => (
              <Link
                className={`border-b border-primary py-5 text-lg capitalize ${
                  pathname === item.link ? "text-primary" : ""
                } text-center`}
                href={item.link}
                key={item.id}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="nav-bar z-30 w-full rounded-sm bg-white px-4 md:px-8">
          <div className="m-auto flex  h-16 items-center justify-between rounded-sm">
            <Link className="flex items-center justify-self-start" href={"/"}>
              <Image
                className="h-12 w-12"
                src={logo}
                alt="logo"
                width={50}
                height={50}
              />
              <h1 className="justify-self-center pl-2 text-2xl font-extrabold text-primary">
                Classy Closet
              </h1>
            </Link>
            {/* <input className="text-violet-700 md:block hidden" type="search" placeholder="dfdfd"/> */}
            <div className="hidden items-center gap-5 text-secondary md:flex lg:gap-10">
              {navLinks.map((item) => (
                <Link
                  className={`S_Underline relative inline-block px-4 py-2 capitalize ${
                    pathname === item.link
                      ? "text-primary after:bg-primary"
                      : "after:bg-secondary"
                  } hover:after:left-3 hover:after:w-[72%]`}
                  href={item.link}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                className="relative p-2"
                href={"/cart"}
                onClick={() => setOpen(false)}
              >
                <CartLogo
                  className={`h-8 w-8 ${
                    pathname === "/cart" ? "text-primary" : ""
                  }`}
                />
                {/* <span className="absolute right-[5px] top-0 flex h-[18px] w-[18px] items-start justify-center rounded-full bg-[#F02D34] text-xs font-semibold leading-3 text-white">
                  {totalProductQuantity}
                </span> */}
              </Link>
              <div
                className={`block justify-self-end md:hidden ${
                  open && "opacity-0"
                }`}
              >
                <FiMenu
                  size={24}
                  className={`h-8 w-8 text-primary`}
                  onClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

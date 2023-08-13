import React, { useState } from "react";

function NavBar() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Coin", link: "/coin" },
    { name: "Transactions", link: "/transactions" },
  ];
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full  justify-between top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  text-gray-800">
          <a href="/"> Digital Coin Exchanger</a>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className=" text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

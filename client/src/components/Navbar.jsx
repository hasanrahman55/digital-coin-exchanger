// import React from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";

import React, { useState } from "react";
import logo from "../../images/logo.png";
// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = React.useState(false);

//   return (
//     <nav className="w-full flex md:justify-center justify-between items-center p-4">
//       <div className="md:flex-[0.5] flex-initial justify-center items-center">
//         <img src={logo} alt="logo" className="w-32 cursor-pointer" />
//       </div>
//       <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
//         {["Swap", "Token", "NFTs", "Wallets"].map((item, index) => (
//           <NavBarItem key={item + index} title={item} />
//         ))}
//         <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//           Login
//         </li>
//       </ul>
//       <div className="flex relative">
//         {!toggleMenu && (
//           <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
//         )}
//         {toggleMenu && (
//           <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
//         )}
//         {toggleMenu && (
//           <ul
//             className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
//             flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
//           >
//             <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
//             {["Market", "Exchange", "Tutorials", "Wallets"].map(
//               (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
//             )}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
function NavBar() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Coin", link: "/coin" },

  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full  justify-between top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          Designer
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
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    // <nav className="w-full flex md:justify-center justify-between items-center p-4">
    //   <div className="md:flex-[0.5] flex-initial justify-center items-center">
    //     <img src={logo} alt="logo" className="w-32 cursor-pointer" />
    //   </div>
    //   <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
    //     {Links.map((link) => (
    //       <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
    //         <a
    //           href={link.link}
    //           className="text-gray-800 hover:text-gray-400 duration-500"
    //         >
    //           {link.name}
    //         </a>
    //       </li>
    //     ))}
    //     <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
    //       Login
    //     </li>
    //   </ul>
    // </nav>

    // <nav className="nav">
    //   <ul>
    //     <li>
    //       <a href="/">HomePage</a>
    //     </li>
    //     <li>
    //       <a href="/price">Price</a>
    //     </li>
    //     <li>
    //       <a href="/account">account</a>
    //     </li>
    //     <li>
    //       <a href="/coin">Coin</a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;

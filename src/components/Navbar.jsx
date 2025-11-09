// import React from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   return (
//     <nav
//       className={`${styles.paddingX} bg-slate-500 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}
//     >
//       <div className=" bg-red-400 w-full justify-between items-center max-w-7xl mx-auto">
//         {/* bagian logo */}
//         <Link to="/" className="bg-orange-400 flex items-center gap-2">
//           <img src="/logo.svg" alt="loto" className="w-9 h-9 object-contain" />
//           <p className=" text-white tex-[18px] font-bold cursor-pointer">
//             MyBran <span className=" sm:block hidden">| React Navbar</span>
//           </p>
//         </Link>

//         {/* bagian menu list kosong */}
//         <ul className=" list-none hidden sm:flex flex-row gap-10">
//           <li className=" text-secondary hover:text-white cursor-pointer">
//             Menu1
//           </li>
//           <li className=" text-secondary hover:text-white cursor-pointer">
//             Menu2
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//========================kode asli======================

// Import React dan fitur hook: useState, useEffect
import React, { useEffect, useState } from "react";
// Import Link untuk navigasi antar halaman
import { Link } from "react-router-dom";

// Import style dan data tambahan
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// Komponen Navbar utama
const Navbar = () => {
  // State untuk menandai menu mana yang sedang aktif
  const [active, setActive] = useState("");
  // State untuk menandai apakah menu mobile sedang terbuka/tidak
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State untuk menandai apakah halaman sedang discroll > 100px
  const [scrolled, setScrolled] = useState(false);

  // Effect untuk memantau scroll halaman
  useEffect(() => {
    // Fungsi untuk cek posisi scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true); // Kalau scroll lewat 100px → aktifkan background
      } else {
        setScrolled(false); // Kalau kurang → background transparan
      }
    };

    // Pasang event listener
    window.addEventListener("scroll", handleScroll);

    // Bersihkan listener ketika komponen dihapus
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Tag <nav> sebagai container navbar
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 
        ${scrolled ? "bg-primary" : "bg-transparent"}
      `}
    >
      {/* Container isi navbar, dibatasi max width */}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Nama */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // reset menu aktif
            window.scrollTo(0, 0); // scroll ke atas
          }}
        >
          {/* Logo */}
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}

          {/* Nama brand */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Bagus Fatihuddin &nbsp;
            {/* <span className="sm:block hidden"></span> */}
          </p>
        </Link>

        {/* Menu versi desktop (sm = small screen ke atas) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                ${active === nav.title ? "text-white" : "text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Menu versi mobile (hanya muncul di layar kecil) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Icon menu (burger atau close) */}
          <img
            src={isMenuOpen ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // toggle menu
          />

          {/* Dropdown menu mobile */}
          <div
            className={`
              ${!isMenuOpen ? "hidden" : "flex"} 
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 
              min-w-[140px] z-10 rounded-xl
            `}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    font-poppins font-medium cursor-pointer text-[16px] 
                    ${active === nav.title ? "text-white" : "text-secondary"}
                  `}
                  onClick={() => {
                    setIsMenuOpen(false); // tutup menu setelah klik
                    setActive(nav.title); // set menu aktif
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

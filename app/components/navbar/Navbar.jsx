'use client';

import { useNavbar } from '@/app/context/NavbarContext';
import { useScroll } from '@/app/context/ScrollContext';
import useResizeWindow from '@/app/hooks/useResizeWindow';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { icons } from '@/assets';
import Image from 'next/image';
import BtnClose from '../button/BtnClose';

function Navbar() {
  const windowWidth = useResizeWindow();
  const scrollY = useScroll();
  const { isOpenedNavbar, toggleNavbar } = useNavbar();

  const [customClass, setCustomClass] = useState(
    isOpenedNavbar
      ? 'max-md:scale-100 max-md:opacity-100 md:scale-100 md:opacity-100'
      : 'max-md:scale-0 max-md:opacity-0 md:scale-100 md:opacity-100'
  );

  useEffect(() => {
    if (isOpenedNavbar) {
      setCustomClass(
        'max-md:scale-100 max-md:opacity-100 md:scale-100 md:opacity-100'
      );
    } else {
      setCustomClass(
        'max-md:scale-0 max-md:opacity-0 md:scale-100 md:opacity-100'
      );
    }
  }, [isOpenedNavbar]);

  const handleHomeLink = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    windowWidth < 768 && toggleNavbar();
  };

  return (
    <>
      {windowWidth < 768 && (
        <div
          className={`z-30 fixed inset-0 bg-slate-900/50 ${isOpenedNavbar ? 'block' : 'hidden'} transition-all`}
          onClick={toggleNavbar}
        />
      )}
      <nav
        className={`z-40 sticky top-0 left-0 right-0 py-5 lg:py-5 ${scrollY > 32 ? 'bg-white/95' : ''} hover:bg-white backdrop-blur-sm max-md:backdrop-blur-none ${scrollY > 32 && !isOpenedNavbar && 'navbar-shadow'} flex items-center justify-between px-7 sm:px-10 transition-all duration-150`}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold lg:font-bold text-teal-700">
          Nasrudin Fahmi
        </h1>
        {windowWidth < 768 && (
          <button
            type="button"
            className={`p-1.5 order-last border-none size-11 rounded-lg grid place-content-center ${isOpenedNavbar ? 'bg-slate-900/50' : 'bg-teal-100 hover:bg-teal-200 outline outline-1 outline-teal-300 hover:outline-teal-500'} focus-within:outline-none`}
            onClick={toggleNavbar}
          >
            <Image
              src={icons.menuIcon}
              alt="menu ikon"
              width="24"
              height="24"
            />
          </button>
        )}
        <ul
          className={`bg-slate-50 md:bg-transparent z-40 flex max-md:flex-col max-md:justify-center items-center gap-3 max-md:gap-5 lg:gap-6 max-md:fixed inset-7 max-md:shadow-md max-md:rounded-lg ${customClass} transition-all ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] duration-[400ms]`}
        >
          {windowWidth < 768 && (
            <li>
              <BtnClose
                className="fixed top-10 right-10"
                onClick={toggleNavbar}
              />
            </li>
          )}
          <li>
            <Link href="#" className="nav-item" onClick={handleHomeLink}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => windowWidth < 768 && toggleNavbar()}
              className="nav-item"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              onClick={() => windowWidth < 768 && toggleNavbar()}
              className="nav-item"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              onClick={() => windowWidth < 768 && toggleNavbar()}
              className="nav-item"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => windowWidth < 768 && toggleNavbar()}
              className="nav-item"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

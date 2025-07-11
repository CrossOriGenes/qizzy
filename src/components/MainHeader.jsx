import React, { useState } from "react";
import Menu from "./UI/Menu";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const list = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <header
      className="fixed top-0 w-full z-10 bg-transparent"
      data-aos="fade-down"
    >
      <nav className="px-[40px] py-[20px] sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed.
                  Menu open: "hidden", Menu closed: "block"
                */}
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
                    Icon when menu is open.
                    Menu open: "block", Menu closed: "hidden"
                */}
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div
              className="w-[220px] h-[75px] relative overflow-hidden cursor-pointer"
              onClick={() => navigate("..")}
            >
              <img
                src="/logo.png"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center">
                <a
                  href="#"
                  className="rounded-md px-2 py-2 text-lg font-bold text-pink-700"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-2 py-2 text-sm font-medium hover:text-pink-700"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="rounded-md px-2 py-2 text-sm font-medium hover:text-pink-700"
                >
                  Demos
                </a>
                <a
                  href="#"
                  className="rounded-md px-2 py-2 text-sm font-medium hover:text-pink-700"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="rounded-md px-2 py-2 text-sm font-medium hover:text-pink-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-4xl text-white tracking-wider font-bold text-lg uppercase cursor-pointer">
              Login
            </button> */}
            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full -mt-3 bg-gray-800 outline-2 hover:shadow-[0px 0px 0px 6px rgba(0,0,0,0.15)] text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2"
                id="user-menu-button"
                onClick={() => setShow(!show)}
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="size-11 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>

              <AnimatePresence>
                {show && (
                  <Menu
                    containerClass="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-slate-300 p-1.5 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                    profileDiv={
                      <div
                        className="flex w-full items-center p-1.5 pb-3 border-b-1 border-gray-400"
                        data-aos="fade-in"
                      >
                        <div className="icon bg-amber-800" />
                        <div className="flex flex-col items-start ml-1.5">
                          <h3 className="text-md font-extrabold">John Doe</h3>
                          <p className="text-xs font-semibold text-gray-500">
                            johnd@gmail.com
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <motion.li
                      variants={list}
                      className="inline-flex w-full items-center px-4 p-2 text-sm font-bold text-gray-800 hover:bg-slate-400 rounded-[4px]"
                      role="menuitem"
                      onClick={() => setShow(!show)}
                    >
                      <i className="fa-solid fa-user me-1.5" />
                      Profile
                    </motion.li>
                    <motion.li
                      variants={list}
                      className="inline-flex w-full items-center px-4 p-2 text-sm font-bold text-gray-800 hover:bg-slate-400 rounded-[4px]"
                      role="menuitem"
                      onClick={() => setShow(!show)}
                    >
                      <i className="fa-solid fa-gear me-1.5" />
                      Settings
                    </motion.li>
                    <motion.li
                      variants={list}
                      className="inline-flex w-full items-center px-4 py-2 text-sm font-bold text-red-700 hover:bg-slate-400 rounded-[4px]"
                      role="menuitem"
                      onClick={() => setShow(!show)}
                    >
                      <i className="fa-solid fa-right-from-bracket me-1.5" />
                      Log Out
                    </motion.li>
                  </Menu>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;

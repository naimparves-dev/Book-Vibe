import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-0">
            <div className="w-[80%] mx-auto flex items-center justify-between">

                {/* Logo */}
                <div>
                    <Link href={"/"} className="text-xl font-bold">
                        Book Vibe
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden md:flex">
                    <ul className="flex items-center gap-2">
                        <li>
                            <Link href={"/"} className="px-4 py-2 text-gray-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/books"} className="px-4 py-2 text-gray-500">
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link href={"/listed-books"} className="px-4 py-2 text-gray-500">
                                Listed Books
                            </Link>
                        </li>
                        <li>
                            <Link href={"/page-to-read"} className="px-4 py-2 text-gray-500">
                                Pages to Read
                            </Link>
                        </li>
                      
                    </ul>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button className="btn bg-green-600 hover:bg-green-700 text-white border-none px-6">
                        Sign In
                    </button>

                    <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none px-6">
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
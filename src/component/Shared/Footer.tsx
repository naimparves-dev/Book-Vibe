const Footer = () => {
    return (
        <footer className="bg-[#F3F3F3] mt-20 border-t border-gray-200">

            <div className="max-w-[1200px] mx-auto px-6 py-12">

                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Book Vibe
                        </h2>

                        <p className="text-gray-500 mt-3 max-w-sm leading-6">
                            Discover your next favorite book and explore
                            a world of stories, knowledge, and imagination.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-500">
                            <li>
                                <a href="#" className="hover:text-green-600">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-green-600">
                                    Listed Books
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-green-600">
                                    Pages to Read
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">
                            Contact
                        </h3>

                        <p className="text-gray-500">
                            Email: support@bookvibe.com
                        </p>

                        <p className="text-gray-500 mt-2">
                            Phone: +880 1234-567890
                        </p>

                        {/* Social */}
                        <div className="flex gap-3 mt-5">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-green-600 hover:text-white transition"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-green-600 hover:text-white transition"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-green-600 hover:text-white transition"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200 mt-10 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © 2026 Book Vibe. All rights reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
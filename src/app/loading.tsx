const GlobalLoading = () => {
    return (
        <div className="min-h-screen bg-white animate-pulse">

            {/* ================= HERO SKELETON ================= */}
            <div className="w-[82%] mx-auto mt-8">
                <div className="bg-[#f5f5f5] rounded-2xl h-[380px] flex items-center justify-between px-20">

                    {/* Left Content */}
                    <div className="w-1/2">

                        {/* Heading - 2 lines */}
                        <div className="space-y-3">
                            <div className="h-10 w-[400px] bg-gray-200 rounded-md"></div>
                            <div className="h-10 w-[350px] bg-gray-200 rounded-md"></div>
                        </div>

                        {/* Button */}
                        <div className="mt-8 h-12 w-[130px] bg-gray-200 rounded-md"></div>

                    </div>


                    {/* Right Image */}
                    <div className="w-1/2 flex justify-center">
                        <div className="w-[230px] h-[285px] bg-gray-200 rounded-md"></div>
                    </div>

                </div>
            </div>


            {/* ================= POPULAR BOOKS ================= */}
            <div className="max-w-[1200px] mx-auto my-10">

                {/* Heading */}
                <div className="flex justify-center mb-8">
                    <div className="h-9 w-[220px] bg-gray-200 rounded-md"></div>
                </div>


                {/* Book Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                        >

                            {/* Image */}
                            <div className="bg-[#F3F3F3] rounded-lg h-[280px] flex items-center justify-center">
                                <div className="h-[240px] w-[180px] bg-gray-200 rounded-md"></div>
                            </div>


                            {/* Tags */}
                            <div className="flex gap-2 mt-4">
                                <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                                <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                            </div>


                            {/* Book Name */}
                            <div className="h-5 w-3/4 bg-gray-200 rounded mt-3"></div>


                            {/* Author */}
                            <div className="h-4 w-1/2 bg-gray-200 rounded mt-2"></div>


                            {/* Divider */}
                            <div className="border-t border-gray-100 my-4"></div>


                            {/* Category + Pages */}
                            <div className="flex justify-between">

                                <div className="h-4 w-16 bg-gray-200 rounded"></div>

                                <div className="h-4 w-20 bg-gray-200 rounded"></div>

                            </div>


                            {/* Rating + Button */}
                            <div className="flex items-center justify-between mt-4">

                                <div className="h-5 w-12 bg-gray-200 rounded"></div>

                                <div className="h-9 w-[110px] bg-gray-200 rounded-lg"></div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default GlobalLoading;
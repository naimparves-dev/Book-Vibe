const BooksLoading = () => {
    return (
        <div className="w-full max-w-[1200px] mx-auto my-10">

            {/* Heading */}
            <div className="flex justify-center mb-8">
                <div className="h-9 w-36 bg-gray-200 rounded-md animate-pulse" />
            </div>

            {/* Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                    >

                        {/* Image */}
                        <div className="bg-[#F3F3F3] rounded-lg h-[280px] flex items-center justify-center">
                            <div className="h-[240px] w-[180px] bg-gray-200 rounded-md animate-pulse" />
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mt-4">
                            <div className="h-6 w-16 bg-gray-200 rounded-full" />
                            <div className="h-6 w-20 bg-gray-200 rounded-full" />
                        </div>

                        {/* Book name */}
                        <div className="h-5 w-3/4 bg-gray-200 rounded mt-3" />

                        {/* Author */}
                        <div className="h-4 w-1/2 bg-gray-200 rounded mt-1" />

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-4" />

                        {/* Book info */}
                        <div className="flex justify-between">
                            <div className="h-4 w-16 bg-gray-200 rounded" />
                            <div className="h-4 w-20 bg-gray-200 rounded" />
                        </div>

                        {/* Bottom */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="h-5 w-12 bg-gray-200 rounded" />
                            <div className="h-9 w-[110px] bg-gray-200 rounded-lg" />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default BooksLoading;
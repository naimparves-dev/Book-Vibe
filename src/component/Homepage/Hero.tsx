import Image from "next/image";
import bookimg from "@/assets/pngwing 1.png";

const Hero = () => {
    return (
        <div className="w-[82%] mx-auto mt-8">
            <div className="bg-[#f5f5f5] rounded-2xl h-[380px] flex items-center justify-between px-20">

                {/* Left Content */}
                <div className="w-1/2">
                    <h1 className="text-[40px] font-bold leading-[1.25] max-w-[450px]">
                        Books to freshen up
                        <br />
                        your bookshelf
                    </h1>

                    <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-md">
                        View The List
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-1/2 flex justify-center">
                    <Image
                        src={bookimg}
                        alt="Book"
                        width={318}
                        height={394}
                        className="w-[230px] h-auto object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;
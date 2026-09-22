import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/Type/books.type";

interface ListCardProps {
    book: Book;
}

const ListCard = ({ book }: ListCardProps) => {
    return (
        <div className="w-full border border-gray-200 rounded-xl p-4 flex gap-5 items-center bg-white">

            {/* Book Image */}
            <div className="w-[145px] h-[145px] shrink-0 bg-[#F3F3F3] rounded-xl flex items-center justify-center">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={100}
                    height={125}
                    className="w-auto h-[125px] object-contain"
                />
            </div>

            {/* Book Content */}
            <div className="flex-1">

                {/* Book Name */}
                <h2 className="text-xl font-bold text-gray-900">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="text-sm text-gray-500 mt-1">
                    By : {book.author}
                </p>

                {/* Tags + Year */}
                <div className="flex items-center gap-3 mt-4">

                    <span className="font-semibold text-sm text-gray-700">
                        Tag
                    </span>

                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium"
                        >
                            #{tag}
                        </span>
                    ))}

                    <span className="text-sm text-gray-500">
                        ◉ &nbsp; Year of Publishing: {book.yearOfPublishing}
                    </span>
                </div>

                {/* Publisher + Pages */}
                <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">

                    <span>
                        👥 &nbsp; Publisher: {book.publisher}
                    </span>

                    <span>
                        📄 &nbsp; Page {book.totalPages}
                    </span>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mt-4 pt-3 flex items-center justify-between">

                    {/* Category */}
                    <span className="px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm">
                        Category: {book.category}
                    </span>

                    {/* Rating */}
                    <span className="px-4 py-2 bg-orange-50 text-orange-400 rounded-full text-sm">
                        Rating: {book.rating}
                    </span>

                    {/* View Details */}
                    <Link
                        href={`/books/${book.bookId}`}
                        className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-semibold transition"
                    >
                        View Details
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ListCard;
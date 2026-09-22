import { Book } from "@/Type/books.type";
import Image from "next/image";
import Link from "next/link";
interface BookCardProps {
    book: Book
}
const BookCard = ({ book }: BookCardProps) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition duration-300">

            {/* Image */}
            <div className="bg-[#F3F3F3] rounded-lg h-[280px] flex items-center justify-center">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={180}
                    height={250}
                    className="h-[240px] w-auto object-contain"
                />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-4">
                {book.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Name */}
            <h2 className="text-lg font-bold text-gray-800 mt-3">
                {book.bookName}
            </h2>

            {/* Author */}
            <p className="text-sm text-gray-500 mt-1">
                By {book.author}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 my-4"></div>

            {/* Book Info */}
            <div className="flex justify-between text-sm text-gray-500">
                <span>{book.category}</span>
                <span>{book.totalPages} Pages</span>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-4">

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <span className="text-yellow-500">
                        ★
                    </span>

                    <span className="text-sm font-semibold text-gray-700">
                        {book.rating}
                    </span>
                </div>

                <Link href={`/books/${book.bookId}`}>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition">
                        View Details
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default BookCard;